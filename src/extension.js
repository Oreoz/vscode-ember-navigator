const vscode = require('vscode');
const QuickPickBuilder = require('./quick-pick-builder');
const NavigateToTemplateCommand = require('./commands/navigate-template-command');
const NavigateToRouteCommand = require('./commands/navigate-route-command');
const NavigateToTestCommand = require('./commands/navigate-test-command');
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

  context.subscriptions.push(vscode.commands.registerCommand('emberNavigator.navigateTemplate', function () {
    new NavigateToTemplateCommand(vscode.window.activeTextEditor.document.fileName).execute();
  }));

  context.subscriptions.push(vscode.commands.registerCommand('emberNavigator.navigateRoute', function () {
    new NavigateToRouteCommand(vscode.window.activeTextEditor.document.fileName).execute();
  }));

  context.subscriptions.push(vscode.commands.registerCommand('emberNavigator.navigateTest', function () {
    new NavigateToTestCommand(vscode.window.activeTextEditor.document.fileName).execute();
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