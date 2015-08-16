var express = require('express');
var generateSilly = require('./silly');

var app = express();

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.static(__dirname + '/static'));

var cv = JSON.parse(require('fs').readFileSync('helge-cv.json'));

app.get('/', function (req, res) {
  cv.silly = generateSilly();
  res.render('cv', cv);
});

var PORT=8082;
app.listen(PORT);
console.log("http://localhost:" + PORT + "/");
