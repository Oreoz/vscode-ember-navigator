const NavigateTo = require('./navigate-to');

class NavigateRouteCommand extends NavigateTo {
  execute() {
    this.namespaces = new Map([
      ['controllers', ['routes']],
      ['templates', ['routes']],
      ['routes', ['controllers', 'router']],
    ]);

    super.execute();
  }
}

module.exports = NavigateRouteCommand;
