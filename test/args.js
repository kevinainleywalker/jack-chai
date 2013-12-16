test('args', function() {
  out.test('foo', 'bar', 'baz');
  out.test('foo', 'bar');
  out.test();

  expect(out.test).to.have.been.called.with.args('foo', 'bar');
});

throws('args', function() {
  out.test('foo', 'bar', 'baz');
  out.test('foo', 'bar', 'baz', 'boo');
  out.test();

  expect(out.test).to.have.been.called.with.args('foo', 'bar');
}, "expected [TestDouble test] to have been called with [ 'foo', 'bar' ]");

test('args (not)', function() {
  out.test('foo', 'bar', 'baz');
  out.test('foo', 'bar');
  out.test();

  expect(out.test).to.have.not.been.called.with.args('foo', 'bar', 42);
});

throws('args (not)', function() {
  out.test('foo', 'bar', 'baz');
  out.test('foo', 'bar');
  out.test();

  expect(out.test).to.have.not.been.called.with.args('foo', 'bar');
}, "expected [TestDouble test] to have not been called with [ 'foo', 'bar' ]");
