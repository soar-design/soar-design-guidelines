#!/usr/bin/env node
const fs = require("fs");
const os = require("os");
const path = require("path");

const token = process.env.GITHUB_TOKEN;

if (!token) {
  console.error("Error: GITHUB_TOKEN environment variable is not set");
  process.exit(1);
}

try {
  console.log("Creating .netrc file for GitHub authentication...");

  const netrcPath = path.join(os.homedir(), ".netrc");
  const netrcContent = `machine github.com
  login ${token}
  password x-oauth-basic
`;

  fs.writeFileSync(netrcPath, netrcContent, { mode: 0o600 });
  console.log(".netrc file created at", netrcPath);

  console.log("Authentication configured successfully");
} catch (error) {
  console.error("Failed to setup .netrc:", error.message);
  process.exit(1);
}
