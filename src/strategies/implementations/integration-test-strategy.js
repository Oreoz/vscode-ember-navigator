const path = require('path');

const NavigationStrategy = require('../abstractions/navigation-strategy');

class IntegrationTestNavigationStrategy extends NavigationStrategy {
  execute() {
    let matches = /([a-z0-9-]*)-test/.exec(this.location.file);
    let fileName = matches ? matches[1] : '';

    this.destinations.push({
      path: path.join(this.location.project, 'app', this.location.optNamespace, this.location.optDirectories, `${fileName}.js`),
      icon: 'javascript',
      namespace: this.location.optNamespace
    });

    this.destinations.push({
      path: path.join(this.location.project, 'app', 'templates', this.location.optNamespace, this.location.optDirectories, `${fileName}.hbs`),
      icon: 'handlebars',
      namespace: 'templates'
    });

    return super.execute();
  }
}

module.exports = IntegrationTestNavigationStrategy;