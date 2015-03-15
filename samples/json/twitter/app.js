var http = require('http');
var twitter = require('twit');
var data = "";
var tweets = "";

var twit = new twitter({
  consumer_key: 'LgcXYgdULYjwON5Lyv5SGU8Qk',
  consumer_secret: 'iIKDlHsIoLgxqYquMWM2ABlWVlU1oyt9iJKRTzs06tmcyMPDyI',
  access_token: '16669912-smihDEJmdIrz8BsyraMtjvbJQwkY1Ryoxn1kcIfjg',
  access_token_secret: 'x4fQMHcHp2BV31zE21YYG6wTcXNZyjF3XRyMBYN4BPY50'
});

twit.get('search/tweets', { q: 'node.js', count: 100 }, function(err, data, response) {
  console.log(data)
})