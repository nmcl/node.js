var fs = require('fs');

exports.asyncTest = function(test) {
    fs.stat('file1.txt', function(err, stats) {
	test.expect(2);
	test.strictEqual(err, null);
	test.notStrictEqual(stats.size, 0);
	test.done();
    })
};

exports.firstTest = function(test) {
    test.expect(1);
    test.strictEqual("hello", "hello");
    test.done();
};

exports.secondTest = function(test) {
    test.expect(1);
    test.strictEqual("hello", "there");
    test.done();
};