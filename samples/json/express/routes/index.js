var express = require('express');
var router = express.Router();

var rebels = [
    { name: 'Han Solo' },
    { name: 'Luke Skywalker' },
    { name: 'C3PO' },
    { name: 'R2D2' },
    { name: 'Chewbacca' },
    { name: 'Princess Leia' },
    { name: 'Obi-Wan Kenobi'}
];

router.get('/', function(req, res, next) {
    res.send(rebels);
});

module.exports = router;
