/**
 * Imports
 */

import tape from 'tape'
import co from 'co'

/**
 * tape-co
 */

function test (name, fn) {
  return tape(name, wrap(fn))
}

test.only = function only (name, fn) {
  return tape.only(name, wrap(fn))
}

test.skip = function skip (name, fn) {
  return tape.skip(name, wrap(fn))
}

test.createStream = tape.createStream.bind(tape)

/**
 * Helpers
 */

function wrap (fn) {
  fn = co.wrap(fn)

  return function (t) {
    fn(t).then(() => t.end(), err => t.end(err))
  }
}

/**
 * Exports
 */

export default test
