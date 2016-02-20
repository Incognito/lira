'use strict';

var fs = require('fs');
var mockery = require('mockery');
var assert = require('chai').assert;
var bluebird = require('bluebird');

var JiraClient = require('../src/JiraClient')(require('request-promise'));


describe('JiraClient', function(){
    before(function (done) {

        mockery.enable({
            warnOnReplace: false,
            warnOnUnregistered: false,
            useCleanCache: true
        });

        var responsePromise = function (request) {
            var encodedRequestPath = new Buffer(request).toString('base64');
            var response = fs.readFileSync(__dirname + '/data/' + encodedRequestPath, 'utf8');
            return bluebird.resolve(response.trim());
        };

        mockery.registerMock('request-promise', {
            get: responsePromise,
            post: responsePromise,
            put: responsePromise
        })


        done();
    });

    after(function (done) {
        mockery.disable();
        mockery.deregisterAll();
        done();
    });


    it('should contain uri-template methods based on manifest',function(done){
        assert.isFunction(JiraClient.getBoardData);
        done()
    });

    it('should accept arguments as named substitutions',function(done){
        var JiraClient = require('../src/JiraClient')(require('request-promise'));
        // aHR0cHM6Ly9leGFtcGxlLmNvbS9yZXN0L2FwaS8yL2JvYXJkLzEvZGF0YQ==
        var request = JiraClient.getBoardData({boardId: 1}).then(function(message){
            assert.equal(message, '{}');
            done()
        },
        function(message){
            assert.fail(); // If the promise was successful this won't run.
            done()
        });
    });
});
