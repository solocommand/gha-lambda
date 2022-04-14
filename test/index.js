const assert = require('assert');
const { handler } = require('../src/index');

assert.equal(typeof handler, 'function', 'Unable to find handler function');

const test = async () => {
  const response = await handler({ foo: 'bar' });
  assert.equal(response.statusCode, 200, 'Unexpected status code');
  assert.equal(response.event.foo, 'bar', 'Unexpected event');
};

try {
  test();
} catch (err) {
  setImmediate(() => {
    process.exit(1);
  });
}
