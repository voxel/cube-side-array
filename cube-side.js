'use strict';

// expand a convenient shorthand name into a 6-element array for each side
// based on https://github.com/shama/voxel-texture _expandName
var expandName = function(name, array) {
  if (!name || name.length === 0) {
    // empty
    array[0] = array[1] = array[2] = array[3] = array[4] = array[5] = undefined;
  } else if (name.top) {
    // explicit names
    array[0] = name.back;
    array[1] = name.front;
    array[2] = name.top;
    array[3] = name.bottom;
    array[4] = name.left;
    array[5] = name.right;
  } else if (!Array.isArray(name)) {
     // scalar is all
    array[0] = array[1] = array[2] = array[3] = array[4] = array[5] = name;
  } else if (name.length === 1) {
    // 0 is all
    array[0] = array[1] = array[2] = array[3] = array[4] = array[5] = name[0];
  } else if (name.length === 2) {
    // 0 is top/bottom, 1 is sides
    array[0] = array[1] = array[4] = array[5] = name[1];
    array[2] = array[3] = name[0];
  } else if (name.length === 3) {
    // 0 is top, 1 is bottom, 2 is sides
    array[0] = array[1] = array[4] = array[5] = name[2];
    array[2] = name[0];
    array[3] = name[1];
  } else if (name.length === 4) {
    // 0 is top, 1 is bottom, 2 is front/back, 3 is left/right
    array[0] = array[1] = name[2];
    array[2] = name[0];
    array[3] = name[1];
    array[4] = array[5] = name[3];
  } else if (name.length === 5) {
    // 0 is top, 1 is bottom, 2 is front, 3 is back, 4 is left/right
    array[0] = name[3];
    array[1] = name[2];
    array[2] = name[0];
    array[3] = name[1];
    array[4] = array[5] = name[4];
  } else if (name.length === 6) {
    // 0 is back, 1 is front, 2 is top, 3 is bottom, 4 is left, 5 is right
    array[0] = name[0];
    array[1] = name[1];
    array[2] = name[2];
    array[3] = name[3];
    array[4] = name[4];
    array[5] = name[5];
  } else {
    throw new Error('expandName('+name+'): invalid side count array length '+name.length);
  }

  // convert voxel-texture[-shader] side order to ao-mesher side order
  //  0       1    2       3     4        5
  // back   front top   bottom  left    right   voxel-texture (input)
  // right  top   front left    bottom  back    ao-mesher (output)
  var tmp;
  tmp = array[0]; array[0] = array[5]; array[5] = tmp;
  tmp = array[1]; array[1] = array[2]; array[2] = tmp;
  tmp = array[3]; array[3] = array[4]; array[4] = tmp;
};

module.exports = expandName;

