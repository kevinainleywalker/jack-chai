/**
 * Register as chai.js plugin.
 *
 * @param {Object} chai
 * @api public
 */

module.exports = function(chai) {
  var Assertion = chai.Assertion;

  Assertion.addMethod('testDouble', function() {
    var double = this._obj;

    this.assert(
      double && double.double,
      'expected ' + this._obj + ' to be a test double',
      'expected ' + this._obj + ' to not be a test double'
    );
  });

  Assertion.addMethod('called', function() {
    var double = this._obj;
    new Assertion(this._obj).to.be.testDouble();

    this.assert(
      double.calls.length > 0,
      'expected ' + this._obj + ' to have been called',
      'expected ' + this._obj + ' to have not been called'
    );
  });
};
