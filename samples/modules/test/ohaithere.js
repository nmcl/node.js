var assert = require('assert'), ohaithere = require('../lib/ohaithere.js');

/**
 * Test that hello() returns the correct string.
 */

assert.equal(ohaithere.hello(),
	     'Hello from the ohaithere module',
	     'Expected "Hello from the ohaithere module". Got "'+ohaithere.hello()+'"')