test('max', function() {
  out.test();
  expect(out.test).to.have.been.called.max(1);
});

throws('max', function() {
  out.test();
  out.test();
  expect(out.test).to.have.been.called.max(1);
}, 'expected [TestDouble test] to have been called max 1 time(s), got 2');

test('max (not)', function() {
  out.test();
  out.test();
  out.test();
  expect(out.test).to.have.not.been.called.max(2);
});

throws('max (not)', function() {
  out.test();
  expect(out.test).to.have.not.been.called.max(1);
}, 'expected [TestDouble test] to have not been called max 1 time(s), got 1');
