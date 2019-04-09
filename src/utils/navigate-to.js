const utilities = require('./file-utilities');

class NavigateToCommand {
    constructor(location) {
      this.location = location;
      this.namespaces = new Map();
    } 
  
    execute() {
      const { namespace } = utilities.breakdown(this.location) || { namespace: '' };
  
      const namespaces = this.namespaces;
  
      const acceptedNamespaces = namespaces.get(namespace);
  
      let destination = utilities.getPossibleDestinations(this.location)
        .filter(destination => acceptedNamespaces.indexOf(destination.namespace) !== -1)[0];
  
      utilities.openFile(destination.path);
    }
  }

  module.exports = NavigateToCommand;