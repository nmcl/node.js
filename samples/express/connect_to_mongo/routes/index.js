var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo_development')
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Task = new Schema({
    task:String
});

var Task = mongoose.model('Task', Task);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tasks', function(req, res) {
    Task.find({}, function(err, docs) {
	res.render('tasks/index', {
	    title: 'Todos index view',
	    docs: docs
	});
    });
});

module.exports = router;
