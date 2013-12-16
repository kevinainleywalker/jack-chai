test('test double', function() {
  expect(out.test).to.be.a.testDouble();
});

throws('test double', function() {
  expect(out.not).to.be.a.testDouble();
}, 'expected undefined to be a test double');

test('test double (not)', function() {
  expect(out.not).to.not.be.a.testDouble();
});

throws('test double (not)', function() {
  expect(out.test).to.not.be.a.testDouble();
}, 'expected [TestDouble test] to not be a test double');
