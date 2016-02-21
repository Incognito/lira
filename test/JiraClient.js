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
            var encodedRequestPath = new Buffer(request.uri).toString('base64');
            var fileContent = fs.readFileSync(__dirname + '/data/' + encodedRequestPath, 'utf8');
            var response = JSON.parse(fileContent);
            response.body = JSON.parse(response.body);
            if (response.statusCode >= 400) {
                return bluebird.reject(response);
            }
            return bluebird.resolve(response);
        };

        mockery.registerMock('request-promise', responsePromise)

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
        JiraClient.getBoardData({boardId: 1}).then(function(message){
            assert.equal(JSON.stringify(message.body), JSON.stringify({}));
            done()
        },
        function(message){
            assert.fail(); // If the promise was successful this won't run.
            done()
        });
    });
});
