const utilities = require('./utils/file-utilities');

function buildQuickPicks(fileName = '') {
  const destinations = utilities.getPossibleDestinations(fileName);

  const titles = new Map([
    [ 'adapters', 'Navigate to the Associated Adapter' ],
    [ 'components', 'Navigate to the Associated Component' ],
    [ 'controllers', 'Navigate to the Associated Controller' ],
    [ 'helpers', 'Navigate to the Associated Helper' ],
    [ 'initializers', 'Navigate to the Associated Initializer' ],
    [ 'models', 'Navigate to the Associated Model' ],
    [ 'router', 'Navigate to the Ember Router' ],
    [ 'routes', 'Navigate to the Associated Route' ],
    [ 'serializers', 'Navigate to the Associated Serializer' ],
    [ 'services', 'Navigate to the Associated Service' ],
    [ 'templates', 'Navigate to the Associated Template' ],
    [ 'tests', 'Navigate to the Generated Test' ],
    [ 'transforms', 'Navigate to the Associated Transform' ],
  ]);

  return destinations.map(destination => ({
    label: titles.get(destination.namespace),
    description: destination.path,
    onClick: () => utilities.openFile(destination.path)
  }));
}

exports.buildQuickPicks = buildQuickPicks;