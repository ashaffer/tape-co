
# tape-co

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Generator interface for [tape](https://github.com/substack/tape)

## Installation

    $ npm install tape-co

## Usage

Just use it like tape, except your functions will be wrapped in [co](https://github.com/tj/co) and you will no longer have to remember to call `.end()`.

```javascript
import test from 'tape-co'
import myThing from '..'

test('my thing should work', function *(t) {
  const result = yield myThing(someValue)
  t.ok(validate(result))
})
```

There's not a lot of documentation because that's really all there is to it. `test.only/test.skip` will still work as normal.

## License

MIT
