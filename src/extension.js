const vscode = require('vscode');
const utilities = require('./utils/file-utilities');

function activate(context) {
  console.log('`vscode-ember-navigator` is now active!');

  const disposable = vscode.commands.registerCommand('extension.sayHello', function () {
    const fileName = vscode.window.activeTextEditor.document.fileName;

    utilities.toggleJavaScriptHandlebars(fileName);
  });

  context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;