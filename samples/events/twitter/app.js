describe('OAuth1.0',function(){
  var OAuth = require('oauth');
 
  it('tests screen_name Twitter API v1.1',function(done){
    var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'LgcXYgdULYjwON5Lyv5SGU8Qk', // consumer key
      'iIKDlHsIoLgxqYquMWM2ABlWVlU1oyt9iJKRTzs06tmcyMPDyI', // consumer secret
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
      'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=nmcl',
      '16669912-QFEAwP0sAn3Rix3fSg8djtUSMXttrqq8BypOGsS9p', // access token
      'ZkukcSZf03n8S4KFX13iJfGW1b6mcFM3dnUEBxWxGq7vq', // access secret
      function (e, data, res){
        if (e) console.error(e);        
        console.log(require('util').inspect(data));
        done();      
      });    
  });

  it('tests search Twitter API v1.1',function(done){
    var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'LgcXYgdULYjwON5Lyv5SGU8Qk', // consumer key
      'iIKDlHsIoLgxqYquMWM2ABlWVlU1oyt9iJKRTzs06tmcyMPDyI', // consumer secret
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
      'https://api.twitter.com/1.1/search/tweets.json?q=chocolatevanilla',
      '16669912-QFEAwP0sAn3Rix3fSg8djtUSMXttrqq8BypOGsS9p', // access token
      'ZkukcSZf03n8S4KFX13iJfGW1b6mcFM3dnUEBxWxGq7vq', // access secret
      function (e, data, res){
        if (e) console.error(e);        
        console.log(require('util').inspect(data));
        done();      
      });    
  });
});
