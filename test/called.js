test('called', function() {
  out.test();
  expect(out.test).to.have.been.called();
});

throws('called', function() {
  expect(out.test).to.have.been.called();
});

test('not called', function() {
  expect(out.test).to.have.not.been.called();
});

throws('not called', function() {
  expect(out.another).to.have.been.called();
});
