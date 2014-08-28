var Brick = require("brick");
var Cover = require("cover-background");
var Centered = require("centered");

module.exports = Brick(Centered, Cover, {
  show: show
});

function show (centeredCover, url) {
  Cover.methods.show(centeredCover, url);
  centeredCover.brick.bind('.cover-container', {
    'class': 'cover-container centered'
  });
}
