var express = require('express'), app = express(), server = require('http').createServer(app), io = require('socket.io').listen(server);

app.listen(3000);

app.get('/', function(req, res) {
    res.sendFile(__dirname+'/index.html');
});

io.sockets.on('connection', function(socket) {
    socket.emit('welcome', { text:'CONNECTED!' });
});