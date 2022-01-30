
/*
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const User = require("./models/User")



passport.use(new LocalStrategy ({
  
    usernameField: 'name'},
    
    function(username, password, done) {
        User.findOne({ where: {username: username} }).then( (user) => {
  
            if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validatePassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      }).catch(console.error)
    }
  ));
  passport.serializeUser(function(user, done){
    done(null,user.id)
  });
  passport.deserializeUser(function(id, done){
    User.findByPk(id).then((user)=>done(null,user))
  });


  module.exports = passport
*/




/*
  const passport = require("passport")
//const LocalStrategy = require("passport-local").Strategy
const User = require("./models/User")
const db = require("./config/db")

const LocalStrategy = require('passport-local');
const crypto = require('crypto');


passport.use(new LocalStrategy(function verify(username, password, cb) {
  db.get('SELECT rowid AS id, * FROM users WHERE username = ?', [ username ], function(err, row) {
    if (err) { return cb(err); }
    if (!row) { return cb(null, false, { message: 'Incorrect username or password.' }); }

    crypto.pbkdf2(password, row.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
      if (err) { return cb(err); }
      if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
        return cb(null, false, { message: 'Incorrect username or password.' });
      }
      return cb(null, row);
    });
  });
}));

  module.exports = passport
  */