[![NPM version](https://badge.fury.io/js/jack-chai.png)](http://badge.fury.io/js/jack-chai)
[![Build Status](https://secure.travis-ci.org/jackjs/jack-chai.png)](http://travis-ci.org/jackjs/jack-chai)
[![Coverage Status](https://coveralls.io/repos/jackjs/jack-chai/badge.png?branch=master)](https://coveralls.io/r/jackjs/jack-chai?branch=master)

# jack-chai

## Synopsis

Chai.js expectations for Jack.js test doubles

## Usage

```js
// subject:

var out = {
  test: function() {},
  other: function() {}
};

// test double

jack(out, 'test');

```
#### testDouble

Verify that a function is a test double.

```js
expect(out.test).to.be.a.testDouble();
out.test.should.be.a.testDouble();

expect(out.none).to.not.be.a.testDouble();
out.other.should.not.be.a.testDouble();
```

#### invoke

Verify that a test double has been invoked.

```js
expect(out.test).to.have.been.invoked();
expect(out.test).invoked();

out.test.should.have.been.invoked();

expect(out.other).to.have.not.been.invoked();
expect(out.other).invoked();

out.other.should.have.not.been.invoked();
```

#### max

Verify that a test double has been called max `n` times.

```js
expect(out.test).to.have.been.called.max(1);
out.test.should.have.been.called.max(1);
```

#### min

Verify that a test double has been called min `n` times.

```js
expect(out.test).to.have.been.called.min(42);
expect(out.test).to.have.been.called.min(42).times;

out.test.should.have.been.called.min(42);
out.test.should.have.been.called.min(42).times;
```

#### exactly

Verify that a test double has been called exactly `n` times.

```js
expect(out.test).to.have.been.called.exactly(42).times;
expect(out.test).to.have.been.called.exactly(42);

out.test.should.have.been.called.exactly(42);
out.test.should.have.been.called.exactly(42).times;
```

#### once

Verify that a test double has been called exactly once.

```js
expect(out.test).to.have.been.called.once();

out.test.should.have.been.called.once();
```

#### twice

Verify that a test double has been called exactly twice.

```js
expect(out.test).to.have.been.called.twice();

out.test.should.have.been.called.twice();
```

#### on

Verify that a test double has been called on given context.

```js
expect(out.test).to.have.been.called.on(ctx);

out.test.should.have.been.called.on(ctx);

expect(out.test).to.have.not.been.called.on(ctx);

out.test.should.have.not.been.called.on(ctx);
```

#### args

Verify that a test double has been called with given arguments.

```js
expect(out.test).to.have.been.called.with.args('foo', 'bar', 42);

out.test.should.have.been.called.with.args('foo', 'bar', 42);

expect(out.test).to.have.not.been.called.with.args('foo', 'bar', 42);

out.test.should.have.not.been.called.with.args('foo', 'bar', 42);
```

## Installation

npm:

```bash
npm install jack-chai
```

component:

```bash
component install jackjs/jack-chai
```

Standalone:

```html
<script src="jack-chai.js></script>
```

## Tests

```bash
$ npm test
```

Coverage:

```bash
$ npm run coverage
```

## License

(The MIT License)

Copyright (c) 2013 Veselin Todorov <hi@vesln.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
