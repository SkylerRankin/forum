var express = require('express');
var ejs = require('ejs');
var path = require('path');

var app = express();

app.use('/public', express.static(__dirname+'/public'));

app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/signup', function(req, res) {
  res.render('signup');
});

app.get('/login', function(req, res) {
  res.render('login');
});

app.listen(3000, function() { console.log('listening on port 3000'); });
