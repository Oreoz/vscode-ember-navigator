const NavigateTo = require('../utils/navigate-to');

class ToggleRouteControllerCommand extends NavigateTo {
  execute(){
    this.namespaces = new Map([
      ['controllers', ['routes']],
      ['templates', ['routes']],
      ['routes', ['controllers', 'router']],
    ]);

    super.execute();
  }
}

module.exports = ToggleRouteControllerCommand;

