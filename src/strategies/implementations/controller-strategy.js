const path = require('path');
const NavigationStrategy = require('../abstractions/navigation-strategy');

class ControllerNavigationStrategy extends NavigationStrategy {

  execute() {
    this.destinations.push(...[
      {
        path: path.join(this.location.project, this.location.parent, 'templates', this.location.optDirectories, `${this.location.file}.hbs`),
        icon: 'javascript',
        namespace: 'templates'
      },
      {
        path: path.join(this.location.project, this.location.parent, 'routes', this.location.optDirectories, `${this.location.file}.js`),
        icon: 'handlebars',
        namespace: 'routes'
      }
    ]);

    return super.execute();
  }

}

module.exports = ControllerNavigationStrategy;