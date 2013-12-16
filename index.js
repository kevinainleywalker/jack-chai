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

  Assertion.addMethod('invoked', function() {
    var double = this._obj;
    new Assertion(this._obj).to.be.testDouble();

    this.assert(
      double.calls.length > 0,
      'expected ' + this._obj + ' to have been invoked',
      'expected ' + this._obj + ' to have not been invoked'
    );
  });

  Assertion.addMethod('min', function(min) {
    var double = this._obj;
    new Assertion(this._obj).to.be.testDouble();
    var len = double.calls.length;

    this.assert(
      len >= min,
      'expected ' + this._obj + ' to have been called min #{exp} time(s), got ' + len,
      'expected ' + this._obj + ' to have not been called min #{exp} time(s), got ' + len,
      min
    );
  });

  Assertion.addMethod('max', function(max) {
    var double = this._obj;
    new Assertion(this._obj).to.be.testDouble();
    var len = double.calls.length;

    this.assert(
      len <= max,
      'expected ' + this._obj + ' to have been called max #{exp} time(s), got ' + len,
      'expected ' + this._obj + ' to have not been called max #{exp} time(s), got ' + len,
      max
    );
  });

  Assertion.addMethod('exactly', function(times) {
    var double = this._obj;
    new Assertion(this._obj).to.be.testDouble();
    var len = double.calls.length;

    this.assert(
      len === times,
      'expected ' + this._obj + ' to have been called exactly #{exp} time(s), got ' + len,
      'expected ' + this._obj + ' to have not been called exactly #{exp} time(s), got ' + len,
      times
    );
  });

  Assertion.addProperty('called', function() {
    return this;
  });
};
