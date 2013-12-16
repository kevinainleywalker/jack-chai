test('once', function() {
  out.test();
  expect(out.test).to.have.been.called.once();
});

throws('once', function() {
  expect(out.test).to.have.been.called.once();
}, 'expected [TestDouble test] to have been called once, got 0');

test('once (not)', function() {
  expect(out.test).to.have.not.been.called.once();
});

throws('once', function() {
  out.test()
  expect(out.test).to.have.not.been.called.once();
}, 'expected [TestDouble test] to have not been called once, got 1');
