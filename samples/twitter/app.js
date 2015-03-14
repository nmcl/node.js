var express = require('express'),
  twitter = require('twitter'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server);

app.set('port', process.env.PORT || 3000);

var twit = new twitter({
  consumer_key: 'LgcXYgdULYjwON5Lyv5SGU8Qk',
  consumer_secret: 'iIKDlHsIoLgxqYquMWM2ABlWVlU1oyt9iJKRTzs06tmcyMPDyI',
  access_token_key: '16669912-QngLvzpZzWTC9T2N5McyGvxbgjqeUgNER4WqYgB3t',
  access_token_secret: 'MygdEcB2yJcI0suobYgzfLtUi2hmD8MO0eTz5B0XH6bVq'
});

// should use volatile.emit but can't get it to work atm
twit.stream('statuses/filter', { track: 'nasa' }, function(stream) {
  stream.on('data', function (data) {
      console.log(data.user.screen_name+' : '+data.text);
      io.sockets.emit('tweet', {
	  user: data.user.screen_name,
	  text: data.text
      });
  });
});

app.get('/', function(req, res) {
    res.sendFile(__dirname+'/index.html');
});

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
