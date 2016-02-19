'use strict';

var assert = require('chai').assert;
var request=require('request-promise');

var JiraClient = require('../src/JiraClient')(request);

describe('JiraClient', function(){
    it('should contain uri-template methods based on manifest',function(){
        assert.isFunction(JiraClient.getBoardData);
    });

    it('should accept arguments as named substitutions',function(){
        request = JiraClient.getBoardData({boardId: 1})
        console.log(request);
    });
});
