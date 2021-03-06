var express = require('express'),
  twitter = require('twitter'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server);

var nasa = 0, star = 0, total = 0;

app.set('port', process.env.PORT || 3000);

var twit = new twitter({
  consumer_key: 'LgcXYgdULYjwON5Lyv5SGU8Qk',
  consumer_secret: 'iIKDlHsIoLgxqYquMWM2ABlWVlU1oyt9iJKRTzs06tmcyMPDyI',
  access_token_key: '16669912-smihDEJmdIrz8BsyraMtjvbJQwkY1Ryoxn1kcIfjg',
  access_token_secret: 'x4fQMHcHp2BV31zE21YYG6wTcXNZyjF3XRyMBYN4BPY50'
});

// should use volatile.emit but can't get it to work atm
twit.stream('statuses/filter', { track: 'nasa, star' }, function(stream) {
  stream.on('data', function (data) {
      var text = data.text.toLowerCase();
      if (text.indexOf('nasa') !== -1) {
	  nasa++;
	  total++;
      }
      if (text.indexOf('star') !== -1) {
	  star++;
	  total++;
      }
      io.sockets.emit('tweet', {
	  user: data.user.screen_name,
	  text: data.text,
	  star: (star/total)*100,
	  nasa: (nasa/total)*100
      });

      console.log(data.user.screen_name+' : '+data.text);
      console.log('star: '+(star/total)*100+'%');
      console.log('nasa: '+(nasa/total)*100+'%');
  });
});

app.get('/', function(req, res) {
    res.sendFile(__dirname+'/index.html');
});

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
