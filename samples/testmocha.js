var assert = require('assert'), fs = require('fs');

describe('Comparing strings', function() {
    describe('when comparing the same strings', function() {
	it('should return true', function() {
	    assert.strictEqual("hello", "hello");
	})
    })
    describe('when comparing different strings', function() {
	it('should return false', function() {
	    assert.notStrictEqual("hello", "there");
	})
    })
})

describe('Async testing', function() {
    describe('When using fs.stat on a file', function() {
	it('should not be empty', function(done) {
	    fs.stat('file1.txt', function(err, stat) {
		assert.notEqual(stat.size, 0);
		done();
	    });
	})
    })
})