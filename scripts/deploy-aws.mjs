#!/usr/bin/env node

/**
 * One-click deploy: build standalone zip, upload to AWS, replace app, PM2 restart.
 *
 * Usage:
 *   npm run deploy:aws
 *   npm run deploy:aws -- --dry-run
 *   npm run deploy:aws -- --skip-build
 *
 * Config: deploy/aws/deploy.config.local.json (copy from deploy.config.example.json)
 */

import { execSync } from "node:child_process";
import {
  existsSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const root = process.cwd();
const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const skipBuild = args.includes("--skip-build");

const configPath = join(root, "deploy/aws/deploy.config.local.json");

const defaultConfig = {
  host: "3.24.15.251",
  user: "ubuntu",
  keyPath: "deploy/aws/memate.pem",
  remotePath: "/var/www/html/build",
  pm2Name: "memate-next",
  port: 3000,
};

function expandHome(path) {
  if (path.startsWith("~/")) {
    return join(homedir(), path.slice(2));
  }
  return path;
}

function loadConfig() {
  if (existsSync(configPath)) {
    return JSON.parse(readFileSync(configPath, "utf8"));
  }

  writeFileSync(configPath, `${JSON.stringify(defaultConfig, null, 2)}\n`);
  console.log(`Created deploy/aws/deploy.config.local.json`);
  return defaultConfig;
}

function run(command, options = {}) {
  if (dryRun) {
    console.log(`[dry-run] ${command}`);
    return "";
  }
  return execSync(command, { stdio: "inherit", ...options });
}

function latestZip(deployDir) {
  const files = readdirSync(deployDir)
    .filter((f) => f.endsWith(".zip"))
    .map((f) => join(deployDir, f))
    .sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs);
  if (!files.length) {
    throw new Error(`No zip found in ${deployDir}. Run npm run package:aws first.`);
  }
  return files[0];
}

const config = loadConfig();
const host = config.host;
const user = config.user || "ubuntu";
const remotePath = config.remotePath || "/var/www/html/build";
const pm2Name = config.pm2Name || "memate-next";
const port = config.port || 3000;
function resolveKeyPath(rawPath) {
  let path = expandHome(rawPath || "deploy/aws/memate.pem");
  if (!path.startsWith("/")) {
    path = join(root, path);
  }
  if (existsSync(path)) {
    return path;
  }

  const fallbacks = [
    join(root, "deploy/aws/memate.pem"),
    join(homedir(), "Downloads/memate.pem"),
  ];
  for (const candidate of fallbacks) {
    if (existsSync(candidate)) {
      console.log(`Using SSH key: ${candidate}`);
      return candidate;
    }
  }

  console.error(`SSH key not found: ${path}`);
  console.error(`Copy your key: cp ~/Downloads/memate.pem deploy/aws/memate.pem`);
  process.exit(1);
}

const keyPath = resolveKeyPath(config.keyPath);
const remoteZip = config.remoteZip || "/tmp/memate-deploy.zip";

const sshBase = `ssh -i "${keyPath}" -o StrictHostKeyChecking=no ${user}@${host}`;
const scpBase = `scp -i "${keyPath}" -o StrictHostKeyChecking=no`;

console.log(`Deploy target: ${user}@${host}:${remotePath}`);
console.log(`PM2 app: ${pm2Name}`);

const deployDir = join(root, "deploy/aws");

if (!skipBuild) {
  console.log("\n1/4 Building standalone bundle...");
  if (dryRun) {
    console.log("[dry-run] npm run package:aws");
  } else {
    run("npm run package:aws", { cwd: root });
  }
} else {
  console.log("\n1/4 Skipping build (--skip-build)");
}

let zipPath;
if (dryRun) {
  try {
    zipPath = latestZip(deployDir);
  } catch {
    zipPath = join(deployDir, "memate-website-dry-run.zip");
  }
} else {
  zipPath = latestZip(deployDir);
}

console.log(`\n2/4 Uploading ${zipPath}...`);
run(`${scpBase} "${zipPath}" ${user}@${host}:${remoteZip}`);

const remoteScript = `
set -e
REMOTE_PATH="${remotePath}"
PM2_NAME="${pm2Name}"
PORT="${port}"
REMOTE_ZIP="${remoteZip}"
BACKUP="/tmp/memate-env-backup-$(date +%s).env"

echo "3/4 Replacing files in $REMOTE_PATH..."
if [ -f "$REMOTE_PATH/.env" ]; then
  cp "$REMOTE_PATH/.env" "$BACKUP"
  echo "Backed up .env to $BACKUP"
fi

mkdir -p "$REMOTE_PATH"
# Prior deploys left root-owned files; ubuntu cannot rm them without sudo
sudo find "$REMOTE_PATH" -mindepth 1 -maxdepth 1 -exec rm -rf {} +

unzip -oq "$REMOTE_ZIP" -d "$REMOTE_PATH"

if [ -f "$BACKUP" ]; then
  cp "$BACKUP" "$REMOTE_PATH/.env"
  echo "Restored .env"
fi

sudo chown -R ubuntu:ubuntu "$REMOTE_PATH"
mkdir -p "$REMOTE_PATH/.next/cache/images"
chmod -R u+rwX "$REMOTE_PATH/.next"
rm -f "$REMOTE_ZIP"

echo "4/4 Restarting PM2 ($PM2_NAME)..."
if pm2 describe "$PM2_NAME" >/dev/null 2>&1; then
  pm2 delete "$PM2_NAME" || true
fi

cd "$REMOTE_PATH"
PORT=$PORT NODE_ENV=production pm2 start server.js --name "$PM2_NAME"
pm2 save

sleep 2
curl -s -o /dev/null -w "Health check: HTTP %{http_code}\\n" "http://localhost:$PORT/" || true
pm2 list
echo "Deploy complete."
`.trim();

console.log("\n3/4 Running remote deploy...");
if (dryRun) {
  console.log("[dry-run] Remote script:\n", remoteScript);
} else {
  execSync(`${sshBase} 'bash -s'`, {
    input: remoteScript,
    stdio: ["pipe", "inherit", "inherit"],
  });
}

console.log("\nDone.");
