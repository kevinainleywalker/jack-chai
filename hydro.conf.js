/**
 * External dependencies.
 */

var assert = require('assert');

/**
 * Test config.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  hydro.set({
    formatter: 'hydro-dot',
    globals: {
      assert: assert,
    },
    tests: ['test/*.js'],
    plugins: [
      'hydro-bdd',
      'hydro-focus'
    ]
  });
};
