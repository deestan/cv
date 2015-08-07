var jade = require('jade');

var cv = JSON.parse(require('fs').readFileSync('helge-cv.json'));

console.log(jade.renderFile('cv.jade', cv));

