var cluster = require('cluster');
var http = require('http');
var cpus = require('os').cpus().length;

if (cluster.isMaster) {
    console.log('Master process started with PID:', process.pid);

    for (var i = 0; i < cpus; i++) {
	cluster.fork();
    }

    cluster.on('exit', function(worker) {
	console.log('worker '+worker.process.pid+' died');
	cluster.fork();
    });
}
else
{
    console.log('Worker process started with PID:', process.pid);
    http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end('Hello World\n');
    }).listen(3000);
}