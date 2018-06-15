const vscode = require('vscode');
const fs = require('fs');

function openFile(destination = '') {
  if (fs.existsSync(destination)) {
    const file = vscode.Uri.file(destination);
    vscode.commands.executeCommand('vscode.open', file);
  }
}
exports.openFile = openFile;

function breakdown(path = '') {
  let pattern = /^(.*)\\(app|addon|tests)\\([a-z0-9-]+)\\.*?(components)?(.*?)([a-z0-9-]*)[.]([a-z]*)$/;
  let matches = pattern.exec(path);

  return matches ?
    {
      project: matches[1], // Ember Project Root
      parent: matches[2], // Location (app, addon or tests)
      namespace: matches[3], // Namespace
      optNamespace: matches[4], // Optional Namespace
      optDirectories: matches[5], // Optional Extra Folders
      file: matches[6], // File Name
      extension: matches[7]  // Extension
    } : { };
}

exports.breakdown = breakdown;
