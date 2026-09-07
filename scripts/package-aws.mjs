#!/usr/bin/env node

/**
 * Builds a self-contained AWS deploy folder from Next.js standalone output.
 * Run locally: npm run package:aws
 * Upload deploy/aws/*.zip to AWS, then: node server.js
 */

import {
  cpSync,
  existsSync,
  mkdirSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { execSync } from "node:child_process";
import { join } from "node:path";

const root = process.cwd();
const standaloneDir = join(root, ".next", "standalone");
const staticDir = join(root, ".next", "static");
const publicDir = join(root, "public");
const outDir = join(root, "deploy", "aws");
const bundleDir = join(outDir, "bundle");

function run(command) {
  execSync(command, { cwd: root, stdio: "inherit" });
}

console.log("Building Next.js standalone bundle...");
run("npm run build");

if (!existsSync(standaloneDir)) {
  console.error(
    "Standalone output not found. Check next.config.js output: 'standalone'."
  );
  process.exit(1);
}

console.log("Assembling deploy bundle...");
rmSync(outDir, { recursive: true, force: true });
mkdirSync(bundleDir, { recursive: true });

cpSync(standaloneDir, bundleDir, { recursive: true });

if (existsSync(staticDir)) {
  mkdirSync(join(bundleDir, ".next", "static"), { recursive: true });
  cpSync(staticDir, join(bundleDir, ".next", "static"), { recursive: true });
}

if (existsSync(publicDir)) {
  cpSync(publicDir, join(bundleDir, "public"), { recursive: true });
}

writeFileSync(
  join(bundleDir, ".env.example"),
  `# Copy to .env on AWS before starting the server
MAIL_SITE_KEY=your_mail_site_key_here
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
PORT=3000
NODE_ENV=production
`
);

writeFileSync(
  join(bundleDir, "README-DEPLOY.txt"),
  `# MeMate AWS deploy bundle

## On AWS (Node.js 18+ required)

1. Unzip this folder on the server
2. Copy .env.example to .env and fill in values
3. Start:

   NODE_ENV=production PORT=3000 node server.js

Or with PM2:

   pm2 start server.js --name memate-next

No npm install needed on the server.
`
);

const zipName = `memate-website-${new Date().toISOString().slice(0, 10)}.zip`;
const zipPath = join(outDir, zipName);

run(`cd "${bundleDir}" && zip -r "${zipPath}" .`);

console.log(`\nDone.\nBundle folder: ${bundleDir}\nZip file: ${zipPath}`);
