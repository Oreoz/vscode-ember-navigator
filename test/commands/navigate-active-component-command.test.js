/* global suite, test */

const assert = require('assert');

const Command = require('../../src/commands/navigate-active-component-command');

suite('Command: Navigate to active component', function () {

  test('it finds classic component declarations', function () {
    const editor = {
      document: {
        lineAt: () => ({ text: '{{simple-component-name}}' })
      },
      selection: {
        active: {
          line: 1
        }
      }
    };

    let result = new Command(editor)._getComponentName();
    assert.equal(result, 'simple-component-name');

    editor.document.lineAt = () => ({ text: '{{complex/component/name}}' });

    result = new Command(editor)._getComponentName();
    assert.equal(result, 'complex/component/name');

    editor.document.lineAt = () => ({ text: '{{#block-component-start}}' });

    result = new Command(editor)._getComponentName();
    assert.equal(result, 'block-component-start');

    editor.document.lineAt = () => ({ text: '{{/block-component-end}}' });

    result = new Command(editor)._getComponentName();
    assert.equal(result, 'block-component-end');
  });

  test('it finds octane component declarations', function () {
    const editor = {
      document: {
        lineAt: () => ({ text: '<Simple />' })
      },
      selection: {
        active: {
          line: 1
        }
      }
    };

    let result = new Command(editor)._getComponentName();
    assert.equal(result, 'Simple');

    editor.document.lineAt = () => ({ text: '<Simple::Component />' });

    result = new Command(editor)._getComponentName();
    assert.equal(result, 'Simple::Component');

    editor.document.lineAt = () => ({ text: '<BlockStart as |block|>' });

    result = new Command(editor)._getComponentName();
    assert.equal(result, 'BlockStart');

    editor.document.lineAt = () => ({ text: '</BlockEnd>' });

    result = new Command(editor)._getComponentName();
    assert.equal(result, 'BlockEnd');
  });

});