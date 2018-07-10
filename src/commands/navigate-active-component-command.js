const path = require('path');
const utilities = require('../utils/file-utilities');

class NavigateToActiveComponentCommand {
  constructor(editor) {
    this.editor = editor;
  }

  _getComponentName() {
    const { line } = this.editor.selection.active;
    const { text } = this.editor.document.lineAt(line);

    const matches = /{{[#\/]?([a-z0-9-\/]+)/.exec(text);
    return matches ? matches[1] : '';
  }

  _getApplicationPath() {
    let matches = /.*[\/\\](app|addon)[\/\\]/.exec(this.editor.document.fileName);
    return matches ? matches[0] : '';
  }

  execute() {
    const componentName = this._getComponentName();
    const applicationPath = this._getApplicationPath();

    utilities.openFile(path.join(applicationPath, 'templates', 'components', `${componentName.replace('/', '\\')}.hbs`));
  }
}

module.exports = NavigateToActiveComponentCommand;