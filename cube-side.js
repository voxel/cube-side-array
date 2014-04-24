'use strict';

var expandName = function(name, order) {
  var array = new Array(6);

  // from voxel-mesher/ao-mesher -- also seen: 'KFTBLR' (voxel-texture), 'FKTBRL' (Mozilla's WebGL cube demo)
  order = order || 'RTFLBK';

  if (order.length !== 6) {
    throw new Error('expandName invalid order length: ' + order);
  }

  var back   = order.indexOf('K');
  var front  = order.indexOf('F');
  var top    = order.indexOf('T');
  var bottom = order.indexOf('B');
  var left   = order.indexOf('L');
  var right  = order.indexOf('R');

  if (back < 0 || front < 0 || top < 0 || bottom < 0 || left < 0 || right < 0) {
    throw new Error('expandName invalid order: ' + order);
  }

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
    array[back] = array[front] = array[top] = array[bottom] = array[left] = array[right] = name[0];
  } else if (name.length === 2) {
    // 0 is top/bottom, 1 is sides
    array[back] = array[front] = array[left] = array[right] = name[1];
    array[top] = array[bottom] = name[0];
  } else if (name.length === 3) {
    // 0 is top, 1 is bottom, 2 is sides
    array[back] = array[front] = array[left] = array[right] = name[2];
    array[top] = name[0];
    array[bottom] = name[1];
  } else if (name.length === 4) {
    // 0 is top, 1 is bottom, 2 is front/back, 3 is left/right
    array[back] = array[front] = name[2];
    array[top] = name[0];
    array[bottom] = name[1];
    array[left] = array[right] = name[3];
  } else if (name.length === 5) {
    // 0 is top, 1 is bottom, 2 is front, 3 is back, 4 is left/right
    array[back] = name[3];
    array[front] = name[2];
    array[top] = name[0];
    array[bottom] = name[1];
    array[left] = array[right] = name[4];
  } else if (name.length === 6) {
    throw new Error('expandName('+name+'): 6-element array support removed, use objects instead ({back:, front:, top:, bottom:, left:, right:...})');
  } else {
    throw new Error('expandName('+name+'): invalid side count array length '+name.length);
  }

  return array;
};

module.exports = expandName;

