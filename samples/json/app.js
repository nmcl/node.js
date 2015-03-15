var http = require('http');
var obj = {
    name : "Darth Vader",
    occupation : "Dark Lord of the Sith",
    home : "Tatooine"
}

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify(obj));
}).listen(3000, "127.0.0.1");

console.log('Server running at 127.0.0.1:3000/');