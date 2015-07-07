var express = require('express');
var router = express.Router();
var User = require('../model/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
	new User().fetchAll().then(function(data) { 
		res.json(data);
	});
});

module.exports = router;
