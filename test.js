
var cubeSideArray = require('./');
var test = require('tape');

test('scalar', function(t) {
  t.deepEqual(cubeSideArray('foo'), ['foo', 'foo', 'foo', 'foo', 'foo', 'foo']);
  t.end();
});

test('bad order length', function(t) {
  t.throws(function() {
    cubeSideArray('foo', 'LR');
  });
  t.end();
});

test('bad order missing', function(t) {
  t.throws(function() {
    cubeSideArray('foo', 'RTFLBB');
  });
  t.end();
});

test('good order', function(t) {
  t.deepEqual(cubeSideArray('foo', 'RTFLBK'), ['foo', 'foo', 'foo', 'foo', 'foo', 'foo']);
  t.deepEqual(cubeSideArray('foo', 'KFTBLR'), ['foo', 'foo', 'foo', 'foo', 'foo', 'foo']);
  t.deepEqual(cubeSideArray('foo', 'FKTBRL'), ['foo', 'foo', 'foo', 'foo', 'foo', 'foo']);
  t.end();
});

test('1-element all', function(t) {
  t.deepEqual(cubeSideArray(['foo']), ['foo', 'foo', 'foo', 'foo', 'foo', 'foo']);
  t.end();
});
