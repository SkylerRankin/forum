var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = mongoose.Schema({
  username: { type: String, require: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  email: { type: String, required: true, unique: true }
});

userSchema.methods.getUsername = function() { return this.username; };
userSchema.methods.getEmail = function() { return this.email; };
userSchema.methods.getDateCreated = function() { return this.createdAt; };
userSchema.methods.checkPassword = function(pass, done) {
  bcrypt.compare(pass, this.password, function(err, match) {
    done(err, match);
  });
}

userSchema.pre('save', function(done) {
  var user = this;
  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return done(err); }
    bcrypt.hash(user.password, salt, function() {}, function (err, hashed) {
      if (err) {return done(err);}
      user.password = hashed;
      done();
    });
  });
});

var User = mongoose.model('User', userSchema);
module.exports = User;
