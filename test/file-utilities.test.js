/* global suite, test */

//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
const assert = require('assert');

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// const vscode = require('vscode');
// const myExtension = require('../extension');

const utilities = require('../src/utils/file-utilities');

// Defines a Mocha test suite to group tests of similar kind together
suite('Utils: File', function () {

  // Defines a Mocha unit test
  test('it breaksdown an empty path', function () {
    const path = '';
    const result = utilities.breakdown(path);

    assert.deepEqual(result, []);
  });

});