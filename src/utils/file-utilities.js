const vscode = require('vscode');
const path = require('path');
const fs = require('fs');

function openFile(destination = '') {
  if (fs.existsSync(destination)) {
    const file = vscode.Uri.file(destination);
    vscode.commands.executeCommand('vscode.open', file);
  }
}
exports.openFile = openFile;

function breakdown(path = '') {
  const matcher = RegExp(/^(.*)\\(app|addon|tests)\\([a-z0-9-]+)\\.*?(components)?(.*?)([a-z0-9-]*)[.]([a-z]*)$/);
  let matches = matcher.exec(path);

  if (matches) {
    return [
      matches[1], // Ember Project Root
      matches[2], // Location (app, addon or tests)
      matches[3], // Namespace
      matches[4], // Optional Namespace
      matches[5], // Optional Extra Folders
      matches[6], // File Name
      matches[7]  // Extension
    ];
  }
  return [];
}
exports.breakdown = breakdown;

function toggleJavaScriptHandlebars(x) {
  const [ root, location, namespace, optNamespace, optExtraFolders, fileName, extension ] = breakdown(x);
  const applicationPath = [root, location].join('\\');

  let destination = null;

  // component.hbs -> component.js
  if (namespace === 'templates' && optNamespace === 'components' && extension === 'hbs') {
    destination = path.join(applicationPath, 'components', optExtraFolders, `${fileName}.js`);
  }

  // component.js -> component.hbs
  else if (namespace === 'components' && extension === 'js') {
    destination = path.join(applicationPath, 'templates', 'components', optExtraFolders, `${fileName}.hbs`);
  }

  // route.js -> template.hbs
  // controller.js -> template.hbs
  else if ((namespace === 'controllers' || namespace === 'routes') && extension === 'js') {
    destination = path.join(applicationPath, 'templates', optExtraFolders, `${fileName}.hbs`);
  }

  // template.hbs -> controller.js
  else if (namespace === 'templates' && extension === 'hbs') {
    destination = path.join(applicationPath, 'controllers', optExtraFolders, `${fileName}.js`);
  }

  openFile(destination);
}
exports.toggleJavaScriptHandlebars = toggleJavaScriptHandlebars;