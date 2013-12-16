test('invoked', function() {
  out.test();
  expect(out.test).to.have.been.invoked();
});

throws('invoked', function() {
  expect(out.test).to.have.been.invoked();
}, 'expected [TestDouble test] to have been invoked');

test('not invoked', function() {
  expect(out.test).to.have.not.been.invoked();
});

throws('not invoked', function() {
  expect(out.another).to.have.been.invoked();
}, 'expected [TestDouble another] to have been invoked');
