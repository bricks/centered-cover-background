## centered-cover-background

Cover Background With Centered Content

## Install

```bash
$ npm install centered-cover-background
```

## Usage

Mix it with your Brick:

```js
var Brick = require('brick')
var Cover = require('cover-background')

module.exports = Brick(Cover, {
  show: show
});

function show (foo) {
  Cover.methods.show(foo, 'http://background.picture.jpg')
  foo.brick.bind('.cover-content', 'hello world')
}
```


