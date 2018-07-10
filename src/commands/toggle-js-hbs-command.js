const utilities = require('../utils/file-utilities');

class ToggleJavaScriptHandlebarsCommand {
  constructor(location) {
    this.location = location;
  }

  execute() {
    const { namespace } = utilities.breakdown(this.location) || { namespace: '' };

    const namespaces = new Map([
      ['controllers', ['templates']],
      ['components', ['templates']],
      ['templates', ['controllers', 'components']],
    ]);

    const acceptedNamespaces = namespaces.get(namespace);

    const { path } = utilities
      .getPossibleDestinations(this.location)
      .filter(destination => acceptedNamespaces.indexOf(destination.namespace) !== -1)[0];

    utilities.openFile(path);
  }
}

module.exports = ToggleJavaScriptHandlebarsCommand;