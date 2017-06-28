var express = require('express');
var ejs = require('ejs');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var routes = require('./routes');

var app = express();
mongoose.connect('mongodb://localhost:27017/test');

app.use('/public', express.static(__dirname+'/public'));

app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(routes);

app.listen(3000, function() { console.log('listening on port 3000'); });
