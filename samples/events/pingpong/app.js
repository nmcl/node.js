var EventEmitter = require('events').EventEmitter;
var pingpong = new EventEmitter();

setTimeout(function() {
    console.log('Sending first ping');
    pingpong.emit('ping');
}, 2000);

pingpong.on('ping', function() {
    console.log('Got ping');
    setTimeout(function() {
	pingpong.emit('pong');
    }, 2000);
});

pingpong.on('pong', function() {
    console.log('Got pong');
    setTimeout(function() {
	pingpong.emit('ping');
    }, 2000);
});