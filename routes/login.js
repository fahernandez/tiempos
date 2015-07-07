var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET login page. */
router.get('/', function(req, res, next) {
	console.log('Application login received');
	
	if(req.isAuthenticated()) res.redirect('/');
  	res.render('login');
});

/* Post login handler */
router.post('/', function(req, res, next) {
	console.log('Application login access received');

   	passport.authenticate('local', { 
   		successRedirect: '/',
        failureRedirect: '/login'}, 
        function(err, user, info) {
      		if(err) {
         		return res.render('login', {errorMessage: err.message});
      		} 
      		if(!user) {
         		return res.render('login', {errorMessage: info.message});
      		}
      		return req.logIn(user, function(err) {
         		if(err) {
            		return res.render('login', {errorMessage: err.message});
         		} else {
            		return res.redirect('/');
         		}
        });
   })(req, res, next);
});

module.exports = router;
