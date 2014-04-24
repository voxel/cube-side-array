
var cubeSideArray = require('./');
var test = require('tape');

test('scalar', function(t) {
  t.deepEqual(cubeSideArray('dirt'), ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt']);
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

test('2-element top/bottom + sides', function(t) {
  t.deepEqual(cubeSideArray(['foo', 'bar'], 'TBLRFK'), ['foo', 'foo', 'bar', 'bar', 'bar', 'bar']);
  t.end();
});

test('3-element top, bottom, sides', function(t) {
  t.deepEqual(cubeSideArray(['foo', 'bar', '_'], 'TBLRFK'), ['foo', 'bar', '_', '_', '_', '_']);
  t.end();
});

test('grass', function(t) {
  t.deepEqual(cubeSideArray(['grass_top', 'dirt', 'grass_side'], 'RTFLBK'),
  [ 'grass_side',
    'grass_top',
    'grass_side',
    'grass_side',
    'dirt',
    'grass_side' ]);
  t.end();
});

test('4-element top, bottom, front/back, left/right', function(t) {
  t.deepEqual(cubeSideArray(['foo', 'bar', 'quux', '_'], 'TBFKLR'), ['foo', 'bar', 'quux', 'quux', '_', '_']);
  t.end();
});

test('5-element top, bottom, front, back, left/right', function(t) {
  t.deepEqual(cubeSideArray(['top', 'bot', 'fnt', 'bck', '_'], 'TBFKLR'), ['top', 'bot', 'fnt', 'bck', '_', '_']);
  t.end();
});

test('6-element bad', function(t) {
  t.throws(function() {
    cubeSideArray([1,2,3,4,5,6]);
  });
  t.end();
});

test('object 6-element', function(t) {
  t.deepEqual(cubeSideArray({right:1, top:2, front:3, left:4, bottom:5, back:6}, 'RTFLBK'), [1, 2, 3, 4, 5, 6]);
  t.end();
});
