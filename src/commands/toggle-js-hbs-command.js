const NavigateTo = require('../utils/navigate-to');

class ToggleJavaScriptHandlebarsCommand extends NavigateTo {
  execute() {
    this.namespaces = new Map([
      ['controllers', ['templates']],
      ['components', ['templates']],
      ['templates', ['controllers', 'components']],
      ['routes', ['templates']]
    ]);

    super.execute();
  }
}

module.exports = ToggleJavaScriptHandlebarsCommand;