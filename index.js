/**
 * Register as chai.js plugin.
 *
 * @param {Object} chai
 * @api public
 */

var eql = require('deep-eql');

module.exports = function(chai, _) {
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

  Assertion.addMethod('once', function() {
    var double = this._obj;
    new Assertion(this._obj).to.be.testDouble();
    var len = double.calls.length;

    this.assert(
      len === 1,
      'expected ' + this._obj + ' to have been called once, got ' + len,
      'expected ' + this._obj + ' to have not been called once, got ' + len
    );
  });

  Assertion.addMethod('twice', function() {
    var double = this._obj;
    new Assertion(this._obj).to.be.testDouble();
    var len = double.calls.length;

    this.assert(
      len === 2,
      'expected ' + this._obj + ' to have been called twice, got ' + len,
      'expected ' + this._obj + ' to have not been called twice, got ' + len
    );
  });

  Assertion.addMethod('on', function(ctx) {
    var double = this._obj;
    new Assertion(this._obj).to.be.testDouble();
    var ok = false;

    for (var i = 0, len = double.calls.length; i < len; i++) {
      if (eql(double.calls[i].context, ctx)) ok = true;
    }

   this.assert(
      ok,
      'expected ' + this._obj + ' to have been called on ' + _.inspect(ctx),
      'expected ' + this._obj + ' to have not been called twice, got ' + _.inspect(ctx)
    );
  });

  Assertion.addProperty('called', function() {
    return this;
  });
};
