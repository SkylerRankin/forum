var express = require('express');
var ejs = require('ejs');
var path = require('path');

var app = express();

app.use('/public', express.static(__dirname+'/public'));

app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  var params = {
    css: 'public/styles/home_style.css',
    summary_title: 'Neo4J doesnt work',
    summary_thread: 'Graphing DBs',
    summary_user: 'Barak Insane Yomama',
    summary_content: 'ntsdoih sdfnlsd sdfnsnd sdfnsdf sdfkln sdfnloier',
    summary_date: 'June 43rd, 1',
    summary_comments: '-1'
  };
  res.render('home', params);
});

app.get('/signup', function(req, res) {
  res.render('signup', {css: 'public/styles/signup_style.css'});
});

app.get('/login', function(req, res) {
  res.render('login', {css: 'public/styles/login_style.css'});
});

app.listen(3000, function() { console.log('listening on port 3000'); });
