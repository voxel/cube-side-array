
var cubeSideArray = require('./');
var test = require('tape');

var array = new Array(6);

test('scalar', function(t) {
  cubeSideArray('foo', array);
  console.log(array);
  t.deepEqual(array, ['foo', 'foo', 'foo', 'foo', 'foo', 'foo']);
  t.end();
});

