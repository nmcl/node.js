var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();
router.use(bodyParser());

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

router.get('/tasks/new', function(req, res) {
    res.render('tasks/new.jade', {
	title: 'New Task'
    });
});

router.post('/tasks', function(req, res) {
    var task = new Task(req.body.task);
    console.log("response: "+res.statusCode);
    console.log("task is "+req.body.task);
    console.log("and "+task.task);
    task.save(function(err) {
	if (!err) {
	    res.redirect('/tasks');
	}
	else {
	    res.redirect('/tasks/new');
	}
    });
});

module.exports = router;
