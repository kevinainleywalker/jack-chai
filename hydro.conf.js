/**
 * External dependencies.
 */

var assert = require('assert');
var chai = require('chai');
var jack = require('jack');

/**
 * Expect.
 */

var expect = require('chai').expect;

/**
 * Test object.
 */

var testObject = {
  test: function() {},
  another: function() {}
};

/**
 * Test config.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  chai.use(require('./'));

  function throws(title, fn) {
    hydro.addTest(title + ' (throws)', function() {
      var err = null;
      try { fn() }
      catch(e) { err = e; }
      assert(err, 'Expected `fn` to throw \n\n' + fn + '\n');
    });
  }

  hydro.set({
    formatter: 'hydro-dot',
    suite: 'jack-chai',
    globals: {
      out: testObject,
      jack: jack,
      expect: expect,
      throws: throws
    },
    proxies: {
      suite: 'addSuite',
      test: 'addTest'
    },
    tests: ['test/*.js'],
    plugins: [
      'hydro-tdd',
      'hydro-focus'
    ]
  });

  hydro.on('pre:test', function() {
    jack.revert();
    jack(testObject, 'test');
    jack(testObject, 'another');
  });
};
