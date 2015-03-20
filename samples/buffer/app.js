var fs = require('fs');

fs.readFile('file.txt', function(err, data) {
    if (err) throw err;
    console.log(data);
});

fs.readFile('file.txt', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
});