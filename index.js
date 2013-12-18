/**
 * External dependencies.
 */

var assertions = require('jack-assertions');

/**
 * Register as chai.js plugin.
 *
 * @param {Object} chai
 * @api public
 */

module.exports = function(chai) {
  assertions(chai.Assertion, '_obj');

  chai.Assertion.addProperty('called', function() {
    return this;
  });
};
