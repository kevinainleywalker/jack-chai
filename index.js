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

  Assertion.addMethod('min', function(min) {
    var double = this._obj;
    new Assertion(this._obj).to.be.testDouble();
    var len = double.calls.length;

    this.assert(
      len >= min,
      'expected ' + this._obj + ' to have been called at least #{exp} times but got ' + len,
      'expected ' + this._obj + ' to have not been called #{exp} times but got ' + len,
      min
    );
  });

  Assertion.addMethod('max', function(min) {
    var double = this._obj;
    new Assertion(this._obj).to.be.testDouble();
    var len = double.calls.length;

    this.assert(
      len <= min,
      'expected ' + this._obj + ' to have been called at most #{exp} times but got ' + len,
      'expected ' + this._obj + ' to have not been called #{exp} times but got ' + len,
      min
    );
  });
};
