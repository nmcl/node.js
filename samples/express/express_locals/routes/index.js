var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    var user = {
	first_name: 'Barack',
	surname: 'Obama',
	address: 'The White House',
	facebook_friends: '1000000000'
    };

    res.render('index.jade', { title:'User', user: user });
});

module.exports = router;
