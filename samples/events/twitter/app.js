describe('OAuth1.0',function(){
  var OAuth = require('oauth');
 
  it('tests trends Twitter API v1.1',function(done){
    var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'LgcXYgdULYjwON5Lyv5SGU8Qky',
      'iIKDlHsIoLgxqYquMWM2ABlWVlU1oyt9iJKRTzs06tmcyMPDyI',
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
      'https://api.twitter.com/1.1/trends/place.json?id=23424977',
      '16669912-nDwcBlCMEzvWRdB86mOVZlQcvucjN3KQlq4s2fMrg', //test user token 
      'LH7Bpqhj8fsV4ehLotA3SR5vTm0olwWxmZYAgQ6tO20Al', //test user secret             
      function (e, data, res){
        if (e) console.error(e);        
        console.log(require('util').inspect(data));
        done();      
      });    
  });
});
