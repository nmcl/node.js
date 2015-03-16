console.log(process.pid);

process.stdin.resume();

process.on('SIGINT', function() {
    console.log('Got a SIGINT. Exiting.');
    process.exit(0);
});

process.on('SIGTERM', function() {
    console.log('Got a SIGTERM. Exiting.');
    process.exit(0);
});

console.log('Run `kill '+process.pid+'` to send a SIGTERM.');
console.log('Run `kill -s SIGINT '+process.pid+'` to send a SIGINT.');