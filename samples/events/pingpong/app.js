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

var logPing = function() {
    console.log("Second ping listener got ping");
};

setTimeout(function() {
    console.log('Added a second ping listener');
    pingpong.on('ping', logPing);
}, 4000);

setTimeout(function() {
    console.log('Removed second ping listener');
    pingpong.removeListener('ping', logPing);
}, 12000);