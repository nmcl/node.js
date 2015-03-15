var http = require('http');
var obj = {
    name : "Darth Vader",
    occupation : "Dark Lord of the Sith",
    home : "Tatooine"
}

console.log('JavaScript object: ');
console.log(obj);

var json = JSON.stringify(obj);
console.log('JavaScript object to JSON: ');
console.log(json);

var parsedJson = JSON.parse(json);
console.log('JSON to JavaScript object: ');
console.log(parsedJson);

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(json);
}).listen(3000, "127.0.0.1");

console.log('Server running at 127.0.0.1:3000/');