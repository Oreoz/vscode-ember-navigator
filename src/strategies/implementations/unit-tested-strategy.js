const path = require('path');

const NavigationStrategy = require('../abstractions/navigation-strategy');

class UnitTestedNavigationStrategy extends NavigationStrategy {
  execute() {
    this.destinations.push({
      path: path.join(this.location.project, 'tests', 'unit', this.location.namespace, this.location.optDirectories, `${this.location.file}-test.js`),
      icon: 'javascript-test',
      namespace: 'tests'
    });

    return super.execute();
  }
}

module.exports = UnitTestedNavigationStrategy;