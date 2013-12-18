/**
 * External dependencies.
 */

var util = require('jack-util');

/**
 * Register as chai.js plugin.
 *
 * @param {Object} chai
 * @api public
 */

module.exports = function(chai) {
  var Assertion = chai.Assertion;

  Assertion.addMethod('testDouble', function() {
    var ret = util.testDouble(this._obj);
    this.assert(ret.expr, ret.msg, ret.negateMsg);
    return this;
  });

  Assertion.addMethod('invoked', function() {
    new Assertion(this._obj).testDouble();
    var ret = util.invoked(this._obj);
    this.assert(ret.expr, ret.msg, ret.negateMsg);
    return this;
  });

  Assertion.addMethod('min', function(min) {
    new Assertion(this._obj).testDouble();
    var ret = util.min(this._obj, min);
    this.assert(ret.expr, ret.msg, ret.negateMsg);
    return this;
  });

  Assertion.addMethod('max', function(max) {
    new Assertion(this._obj).testDouble();
    var ret = util.max(this._obj, max);
    this.assert(ret.expr, ret.msg, ret.negateMsg);
    return this;
  });

  Assertion.addMethod('exactly', function(times) {
    new Assertion(this._obj).testDouble();
    var ret = util.exactly(this._obj, times);
    this.assert(ret.expr, ret.msg, ret.negateMsg);
    return this;
  });

  Assertion.addMethod('once', function() {
    new Assertion(this._obj).testDouble();
    var ret = util.once(this._obj);
    this.assert(ret.expr, ret.msg, ret.negateMsg);
    return this;
  });

  Assertion.addMethod('twice', function() {
    new Assertion(this._obj).testDouble();
    var ret = util.twice(this._obj);
    this.assert(ret.expr, ret.msg, ret.negateMsg);
    return this;
  });

  Assertion.addMethod('on', function(ctx) {
    new Assertion(this._obj).testDouble();
    var ret = util.on(this._obj, ctx);
    this.assert(ret.expr, ret.msg, ret.negateMsg);
    return this;
  });

  Assertion.addMethod('args', args);
  Assertion.addMethod('withArgs', args);

  function args() {
    var args = [].slice.call(arguments);
    new Assertion(this._obj).testDouble();
    var ret = util.args(this._obj, args);
    this.assert(ret.expr, ret.msg, ret.negateMsg);
    return this;
  }

  Assertion.addProperty('called', function() {
    return this;
  });
};
