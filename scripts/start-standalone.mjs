#!/usr/bin/env node

import { cpSync, existsSync, mkdirSync } from "node:fs";
import { spawn } from "node:child_process";
import { join } from "node:path";

const root = process.cwd();
const standaloneDir = join(root, ".next", "standalone");
const serverFile = join(standaloneDir, "server.js");

if (!existsSync(serverFile)) {
  console.error("Standalone build not found. Run: npm run build");
  process.exit(1);
}

const staticDir = join(root, ".next", "static");
const publicDir = join(root, "public");

if (existsSync(staticDir)) {
  mkdirSync(join(standaloneDir, ".next", "static"), { recursive: true });
  cpSync(staticDir, join(standaloneDir, ".next", "static"), { recursive: true });
}

if (existsSync(publicDir)) {
  cpSync(publicDir, join(standaloneDir, "public"), { recursive: true });
}

const port = process.env.PORT || "3001";
console.log(`Starting standalone server at http://localhost:${port}`);

const child = spawn(process.execPath, [serverFile], {
  cwd: standaloneDir,
  stdio: "inherit",
  env: {
    ...process.env,
    NODE_ENV: "production",
    PORT: port,
    HOSTNAME: "0.0.0.0",
  },
});

child.on("exit", (code) => process.exit(code ?? 0));
