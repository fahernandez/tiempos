var express = require('express');
var router = express.Router();
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;


// Configure passport strategy
passport.use(new LocalStrategy(function(username, password, done) {}));

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login');
});


module.exports = router;
