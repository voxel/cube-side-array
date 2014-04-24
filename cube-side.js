'use strict';

var expandName = function(name, array, order) {

  order = order || 'KFTBLR';

  var back   = order.indexOf('K');
  var front  = order.indexOf('F');
  var top    = order.indexOf('T');
  var bottom = order.indexOf('B');
  var left   = order.indexOf('L');
  var right  = order.indexOf('R');

  if (!name || name.length === 0) {
    // empty
    array[back] = array[front] = array[top] = array[bottom] = array[left] = array[right] = undefined;
  } else if (name.top) {
    // explicit names
    array[back] = name.back;
    array[front] = name.front;
    array[top] = name.top;
    array[bottom] = name.bottom;
    array[left] = name.left;
    array[right] = name.right;
  } else if (!Array.isArray(name)) {
     // scalar is all
    array[back] = array[front] = array[top] = array[bottom] = array[left] = array[right] = name;
  } else if (name.length === 1) {
    // 0 is all
    array[back] = array[front] = array[top] = array[bottom] = array[left] = array[right] = name[back];
  } else if (name.length === 2) {
    // 0 is top/bottom, 1 is sides
    array[back] = array[front] = array[left] = array[right] = name[front];
    array[top] = array[bottom] = name[back];
  } else if (name.length === 3) {
    // 0 is top, 1 is bottom, 2 is sides
    array[back] = array[front] = array[left] = array[right] = name[top];
    array[top] = name[back];
    array[bottom] = name[front];
  } else if (name.length === 4) {
    // 0 is top, 1 is bottom, 2 is front/back, 3 is left/right
    array[back] = array[front] = name[top];
    array[top] = name[back];
    array[bottom] = name[front];
    array[left] = array[right] = name[bottom];
  } else if (name.length === 5) {
    // 0 is top, 1 is bottom, 2 is front, 3 is back, 4 is left/right
    array[back] = name[bottom];
    array[front] = name[top];
    array[top] = name[back];
    array[bottom] = name[front];
    array[left] = array[right] = name[left];
  } else if (name.length === 6) {
    // 0 is back, 1 is front, 2 is top, 3 is bottom, 4 is left, 5 is right
    array[back] = name[back];
    array[front] = name[front];
    array[top] = name[top];
    array[bottom] = name[bottom];
    array[left] = name[left];
    array[right] = name[right];
  } else {
    throw new Error('expandName('+name+'): invalid side count array length '+name.length);
  }
};

module.exports = expandName;

