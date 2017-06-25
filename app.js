var express = require('express');
var ejs = require('ejs');
var path = require('path');

var app = express();
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  ejs.render('home');
});


app.listen(3000, function() { console.log('listening on port 3000'); });
