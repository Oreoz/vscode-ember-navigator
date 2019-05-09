const path = require('path');
const utilities = require('../utils/file-utilities');
const { dasherize } = require('../utils/string');

const CLASSIC_COMPONENT_INVOCATION_SYNTAX = /{{[#\/]?([a-z0-9-\/]+)/;
const OCTANE_COMPONENT_INVOCATION_SYNTAX = /<[\/]?([A-z0-9]+(::[A-z0-9]+)*)/;

class NavigateToActiveComponentCommand {
  constructor(editor) {
    this.editor = editor;
  }

  _getComponentName() {
    const { line } = this.editor.selection.active;
    const { text } = this.editor.document.lineAt(line);

    let matches = CLASSIC_COMPONENT_INVOCATION_SYNTAX.exec(text);

    if (matches) {
      return matches[1];
    }

    matches = OCTANE_COMPONENT_INVOCATION_SYNTAX.exec(text);

    return matches ? matches[1] : '';
  }

  _getApplicationPath() {
    let matches = /.*[\/\\](app|addon)[\/\\]/.exec(this.editor.document.fileName);
    return matches ? matches[0] : '';
  }

  execute() {
    const componentName = this._getComponentName();
    const applicationPath = this._getApplicationPath();

    const dasherized = dasherize(componentName) + '.hbs';
    const chunks = ['templates', 'components'].concat(dasherized.split(/\/|::/));

    utilities.openFile(path.join(applicationPath, ...chunks));
  }
}

module.exports = NavigateToActiveComponentCommand;