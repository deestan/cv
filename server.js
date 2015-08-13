var express = require('express');

var app = express();

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.static(__dirname + '/static'));

app.get('/', function (req, res) {
  var cv = JSON.parse(require('fs').readFileSync('helge-cv.json'));
  res.render('cv', cv);
});

var PORT=8082;
app.listen(PORT);
console.log("http://localhost:" + PORT + "/");
