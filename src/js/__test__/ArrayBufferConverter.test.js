import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../ArrayBufferConverter';

test('Test convert arrayBuffer to string', () => {
  const buffer = new ArrayBufferConverter();
  buffer.load(getBuffer());

  expect(buffer.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
