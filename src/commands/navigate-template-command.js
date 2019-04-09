const NavigateTo = require('../utils/navigate-to');

class NavigateTemplateCommand extends NavigateTo {
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

module.exports = NavigateTemplateCommand;