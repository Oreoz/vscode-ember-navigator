const vscode = require('vscode');
const QuickPickBuilder = require('./quick-pick-builder');

function activate(context) {
  console.log('`vscode-ember-navigator` is now active!');

  const disposable = vscode.commands.registerCommand('extension.openEmberNavigator', function () {
    const fileName = vscode.window.activeTextEditor.document.fileName;

    const picks = QuickPickBuilder.buildQuickPicks(fileName);

    vscode.window.showQuickPick(picks).then(selection => {
      if (selection && selection.onClick) {
        selection.onClick();
      }
    });
  });

  context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;