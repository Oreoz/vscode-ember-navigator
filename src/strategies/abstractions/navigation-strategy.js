const fs = require('fs');

class NavigationStrategy {
  constructor(location) {
    this.destinations = [];
    this.location = location;
  }

  execute() {
    return this.destinations.filter(destination => fs.existsSync(destination.path));
  }
}

module.exports = NavigationStrategy;