test('test double', function() {
  expect(out.test).to.be.a.testDouble();
});

throws('test double', function() {
  expect(out.not).to.be.a.testDouble();
});

test('not a test double', function() {
  expect(out.not).to.not.be.a.testDouble();
});

throws('not a test double', function() {
  expect(out.test).to.not.be.a.testDouble();
});
