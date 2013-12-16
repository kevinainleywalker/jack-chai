test('twice', function() {
  out.test();
  out.test();
  expect(out.test).to.have.been.called.twice();
});

throws('twice', function() {
  expect(out.test).to.have.been.called.twice();
}, 'expected [TestDouble test] to have been called twice, got 0');

test('twice (not)', function() {
  expect(out.test).to.have.not.been.called.twice();
});

throws('twice', function() {
  out.test()
  out.test()
  expect(out.test).to.have.not.been.called.twice();
}, 'expected [TestDouble test] to have not been called twice, got 2');
