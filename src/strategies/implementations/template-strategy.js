const path = require('path');

const NavigationStrategy = require('../abstractions/navigation-strategy');

class TemplateNavigationStrategy extends NavigationStrategy {
  execute() {
    this.destinations.push(...[
      {
        path: path.join(this.location.project, this.location.parent, 'components', this.location.optDirectories, `${this.location.file}.js`),
        icon: 'javascript',
        namespace: 'components'
      },
      {
        path: path.join(this.location.project, this.location.parent, 'controllers', this.location.optDirectories, `${this.location.file}.js`),
        icon: 'javascript',
        namespace: 'controllers'
      },
      {
        path: path.join(this.location.project, this.location.parent, 'routes', this.location.optDirectories, `${this.location.file}.js`),
        icon: 'javascript',
        namespace: 'routes'
      }
    ]);

    return super.execute();
  }
}

module.exports = TemplateNavigationStrategy;