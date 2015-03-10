var http = require('http');

var options = {
    host:'shapeshed.com',
    port:80,
    path:'/'
};

http.get(options, function(res) {
    if (res.statusCode == 200) {
	console.log("This site is up!");
    }
    else
    {
	console.log("This site is down!");
    }
}).on('error', function(e) {
    console.log("There was an error: "+e.message);
});