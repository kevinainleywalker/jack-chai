test('on', function() {
  var context = { foo: 'bar' };
  out.test.call(context);
  expect(out.test).to.have.been.called.on(context);
});

throws('on', function() {
  var context = { foo: 'bar' };
  out.test();
  expect(out.test).to.have.been.called.on(context);
}, "expected [TestDouble test] to have been called on { foo: 'bar' }");

test('on (not)', function() {
  var context = { foo: 'bar' };
  out.test();
  expect(out.test).to.have.not.been.called.on(context);
});

throws('on (not)', function() {
  var context = { foo: 'bar' };
  out.test.call(context);
  expect(out.test).to.have.not.been.called.on(context);
}, "expected [TestDouble test] to have not been called on { foo: 'bar' }");
