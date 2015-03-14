var twitter = require('twitter');

var twit = new twitter({
  consumer_key: 'LgcXYgdULYjwON5Lyv5SGU8Qk',
  consumer_secret: 'iIKDlHsIoLgxqYquMWM2ABlWVlU1oyt9iJKRTzs06tmcyMPDyI',
  access_token_key: '16669912-QngLvzpZzWTC9T2N5McyGvxbgjqeUgNER4WqYgB3t',
  access_token_secret: 'MygdEcB2yJcI0suobYgzfLtUi2hmD8MO0eTz5B0XH6bVq'
});

twit.stream('statuses/filter', { track: 'topgear' }, function(stream) {
  stream.on('data', function (data) {
    console.log(data.user.screen_name+' : '+data.text);
  });
});
