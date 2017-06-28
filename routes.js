var express = require('express');
var User = require('./models/user');
var router = express.Router();

router.get('/', function(req, res) {
  var params = {
    loggedin: false,
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

router.get('/signup', function(req, res) {
  res.render('signup', {css: 'public/styles/signup_style.css'});
});

router.post('/signup', function(req, res, next) {
  var email = req.body.email;
  var name = req.body.username;
  var password = req.body.password;
  console.log('username: ' + name);

  User.findOne({username: name}, function(err, user) {
    console.log(user);
    if (err) { return next(err); }
    if (user) {
      alert('user exists with this username');
      return res.redirect('/signup');
    }

    var newUser = new User({
      username: name,
      password: password,
      email: email
    });

    newUser.save(next);

    console.log('user created');
    res.redirect('/');

  });
/*
  User.find().exec(function(err, users) {
    if (err) res.end('error');
    var clear = true;
    for (var user in users) {
      console.log(user.getEmail());
      if (user.getEmail() === req.body.email || user.getUsername() === req.body.username)
        alert('Account already created under that email/username');
        clear = false;
    }
    if (true) res.redirect('/');
  });*/
});

router.get('/login', function(req, res) {
  res.render('login', {css: 'public/styles/login_style.css'});
});

module.exports = router;
