test('max', function() {
  out.test();
  expect(out.test).to.have.been.called().max(1);
});

throws('max', function() {
  out.test();
  out.test();
  expect(out.test).to.have.been.called().max(1);
});
