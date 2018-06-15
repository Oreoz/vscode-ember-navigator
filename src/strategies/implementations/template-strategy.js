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
      }
    ]);

    return super.execute();
  }
}

module.exports = TemplateNavigationStrategy;