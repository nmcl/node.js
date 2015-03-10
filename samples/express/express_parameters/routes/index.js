var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users/:id', function(req, res) {
    res.send('show content for user id '+req.params.id);
});

module.exports = router;
