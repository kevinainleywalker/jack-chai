test('exactly', function() {
  out.test();
  expect(out.test).to.have.been.called.exactly(1).times;
});

throws('exactly', function() {
  out.test();
  expect(out.test).to.have.been.called.exactly(2).times;
}, 'expected [TestDouble test] to have been called exactly 2 time(s), got 1');

test('exactly (not)', function() {
  out.test();
  expect(out.test).to.have.not.been.called.exactly(2).times;
});

throws('exactly (not)', function() {
  out.test();
  expect(out.test).to.have.not.been.called.exactly(1).times;
}, 'expected [TestDouble test] to have not been called exactly 1 time(s), got 1');
