
var cubeSideArray = require('./');
var test = require('tape');

test('scalar', function(t) {
  t.deepEqual(cubeSideArray('foo'), ['foo', 'foo', 'foo', 'foo', 'foo', 'foo']);
  t.end();
});

