# cube-side-array

Convenient cube side array expansion for texture faces

[![Build Status](https://travis-ci.org/voxel/cube-side-array.png)](https://travis-ci.org/voxel/cube-side-array)

Usage:

    var expandName = require('cube-side-array');

    var array = expandName(name);

Returns a 6-element array, each element corresponding to a cube face. The `name`
parameter is intended to be user-specified; several formats are recognized:

* scalar: the same value is repeated for all sides
* 1-element array: same as scalar
* 2-element array: top/bottom, sides
* 3-element array: top, bottom, sides
* 4-element array: top, bottom, front/back, left/right
* 5-element array: top, bottom, front, back, left/right
* object with keys top, bottom, front, back, left, right

For example, `'dirt'` or `['dirt']` will return `['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt']`,
saving you from having to tediously retype dirt over and over. Or `['grass_top', 'dirt', 'grass_side']`,
specifying `grass_top` for the top face, `dirt` for the bottom face, and `grass_side` for everything else.
See `test.js` for more examples.

Inspired by @shama's [voxel-texture](https://github.com/shama/voxel-texture) `_expandName`

## Custom Order
The second argument can optionally be a 6-character string representing the side order requested
for the return value. Examples:

* RTFLBK - used by [voxel-mesher](https://github.com/voxel/voxel-mesher), [ao-mesher](https://github.com/mikolalysenko/ao-mesher)
* KFTBLR - used by [voxel-texture-shader](https://github.com/deathcap/voxel-texture-shader), [voxel-texture](https://github.com/shama/voxel-texture)
* FKTBRL - used in this [Mozilla WebGL cube demo](https://developer.mozilla.org/en-US/docs/Web/WebGL/Using_textures_in_WebGL)

Default order if omitted is 'RTFLBK' (right, top, front, left, bottom, back)

## License

MIT

