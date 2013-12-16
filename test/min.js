test('min', function() {
  out.test();
  expect(out.test).to.have.been.called().min(1);
});

throws('min', function() {
  expect(out.test).to.have.been.called().min(1);
});
