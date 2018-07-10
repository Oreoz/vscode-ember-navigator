const vscode = require('vscode');
const QuickPickBuilder = require('./quick-pick-builder');
const ToggleJavaScriptHandlebarsCommand = require('./commands/toggle-js-hbs-command');
const NavigateToActiveComponentCommand = require('./commands/navigate-active-component-command');

function activate(context) {
  console.log('`vscode-ember-navigator` is now active!');

  const disposable = vscode.commands.registerCommand('emberNavigator.openEmberNavigator', function () {
    const fileName = vscode.window.activeTextEditor.document.fileName;

    const picks = QuickPickBuilder.buildQuickPicks(fileName);

    vscode.window.showQuickPick(picks).then(selection => {
      if (selection && selection.onClick) {
        selection.onClick();
      }
    });
  });

  context.subscriptions.push(disposable);

  context.subscriptions.push(vscode.commands.registerCommand('emberNavigator.toggleJavaScriptHandlebars', function () {
    new ToggleJavaScriptHandlebarsCommand(vscode.window.activeTextEditor.document.fileName).execute();
  }));

  context.subscriptions.push(vscode.commands.registerCommand('emberNavigator.navigateToActiveComponent', function () {
    new NavigateToActiveComponentCommand(vscode.window.activeTextEditor).execute();
  }));
}

exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}

exports.deactivate = deactivate;