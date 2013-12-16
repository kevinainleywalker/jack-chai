test('min', function() {
  out.test();
  expect(out.test).to.have.been.called.min(1);
});

throws('min', function() {
  expect(out.test).to.have.been.called.min(1);
}, 'expected [TestDouble test] to have been called min 1 time(s), got 0');

test('min (not)', function() {
  out.test();
  expect(out.test).to.have.not.been.called.min(2);
});

throws('min (not)', function() {
  out.test();
  out.test();
  expect(out.test).to.have.not.been.called.min(2);
}, 'expected [TestDouble test] to have not been called min 2 time(s), got 2');
