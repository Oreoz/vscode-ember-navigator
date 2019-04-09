const NavigateTo = require('./navigate-to');

class NavigateTestCommand extends NavigateTo {
  execute() {
    this.namespaces = new Map([
      ['components', ['integration']],
      ['integration', ['components']],
      ['unit', ['adapters', 'controllers', 'helpers', 'initializers', 'models', 'routes', 'serializers', 'services', 'transforms']],
      ['adapters', ['tests']],
      ['controllers', ['tests']],
      ['helpers', ['tests']],
      ['initializers', ['tests']],
      ['models', ['tests']],
      ['routes', ['tests']],
      ['serializers', ['tests']],
      ['services', ['tests']],
      ['transforms', ['tests']],
    ]);

    super.execute();
  }
}

module.exports = NavigateTestCommand;

