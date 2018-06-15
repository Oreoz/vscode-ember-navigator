const utilities = require('./utils/file-utilities');

const ComponentNavigationStrategy = require('./strategies/implementations/component-strategy');
const ControllerNavigationStrategy = require('./strategies/implementations/controller-strategy');
const IntegrationTestNavigationStrategy = require('./strategies/implementations/integration-test-strategy');
const RouteNavigationStrategy = require('./strategies/implementations/route-strategy');
const TemplateNavigationStrategy = require('./strategies/implementations/template-strategy')
const UnitTestNavigationStrategy = require('./strategies/implementations/unit-test-strategy');
const UnitTestedNavigationStrategy = require('./strategies/implementations/unit-tested-strategy');

function _getPossibleDestinations(fileName) {
  let strategies = [];

  const location = utilities.breakdown(fileName);
  
  if (location.namespace === 'controllers') {
    strategies.push(new ControllerNavigationStrategy(location));
  }

  if (location.namespace === 'routes') {
    strategies.push(new RouteNavigationStrategy(location));
  }

  if (location.namespace === 'components') {
    strategies.push(new ComponentNavigationStrategy(location));
  }

  if (location.namespace === 'unit') {
    strategies.push(new UnitTestNavigationStrategy(location));
  }

  if (location.namespace === 'integration') {
    strategies.push(new IntegrationTestNavigationStrategy(location));
  }

  if (location.parent === 'app' || location.parent === 'addon') {
    strategies.push(new UnitTestedNavigationStrategy(location));
  }

  if (location.namespace === 'templates') {
    strategies.push(new TemplateNavigationStrategy(location));
  }

  return [].concat.apply([], strategies.map(strategy => strategy.execute()));
}

function buildQuickPicks(fileName = '') {
  const destinations = _getPossibleDestinations(fileName);

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
    description: destination.path
  }));
}

exports.buildQuickPicks = buildQuickPicks;