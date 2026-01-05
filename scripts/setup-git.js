#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const token = process.env.GITHUB_TOKEN;

if (!token) {
  console.error('Error: GITHUB_TOKEN environment variable is not set');
  process.exit(1);
}

try {
  // Debug: Show what we're trying to install
  console.log('==== DEBUGGING INFO ====');
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  console.log('soar-react-components dependency URL:', pkg.dependencies['@soar-design/soar-react-components']);
  
  // Check if there's an existing git config
  try {
    console.log('\nExisting git config:');
    execSync('git config --global --list', { stdio: 'inherit' });
  } catch (e) {
    console.log('No existing git config');
  }
  
  console.log('\n==== CONFIGURING GIT ====');
  console.log('Configuring git to use HTTPS with token...');
  
  // Create .gitconfig file directly
  const gitConfigPath = path.join(os.homedir(), '.gitconfig');
  const gitConfig = `
[url "https://${token}@github.com/"]
\tinsteadOf = ssh://git@github.com/
\tinsteadOf = git@github.com:
\tinsteadOf = https://github.com/
`;
  
  fs.appendFileSync(gitConfigPath, gitConfig);
  console.log('Git configuration written to', gitConfigPath);
  
  // Verify config
  console.log('\nFinal git config:');
  execSync('git config --global --get-regexp url', { stdio: 'inherit' });
  
  console.log('\nGit configuration complete');
  console.log('=======================\n');
} catch (error) {
  console.error('Failed to configure git:', error.message);
  process.exit(1);
}

