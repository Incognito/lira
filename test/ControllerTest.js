'use strict';

var assert = require('chai').assert;
var bluebird = require('bluebird');
var JiraClient = require('../src/JiraClient')(require('request-promise'));

var Controller = require('../src/Controller')(bluebird, JiraClient);

describe('Controller', function(){
    it('should post a new issue',function(done){
        assert.isFunction(Controller.newIssue);
        Controller.newIssue
        assert.fail();
    });

    it('should show an issue',function(done){
        assert.isFunction(Controller.showIssue);
        Controller.showIssue('ABC-123');
        assert.fail();
    });

    it('should post a comment on an issue',function(done){
        assert.isFunction(Controller.postIssueComment);
        Controller.postIssueComment('ABC-123', 'Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?');
        assert.fail();
    });

    it('should transition an issue',function(done){
        assert.isFunction(Controller.transitionIssue);
        Controller.transitionIssue
        assert.fail();
    });

    it('should upload an attachment to an issue',function(done){
        assert.isFunction(Controller.uploadAttachmentToIssue);
        Controller.uploadAttachmentToIssue
        assert.fail();
    });

    it('should assign self to an issue',function(done){
        assert.isFunction(Controller.assignSelfToIssue);
        Controller.assignSelfToIssue()
        assert.fail();
    });

    it('should display a board',function(done){
        assert.isFunction(Controller.showBoard);
        Controller.showBoard
        assert.fail();
    });

    it('should return JQL results',function(done){
        assert.isFunction(Controller.showBoard);
        Controller.showBoard()
        assert.fail();
    });

    it('should display filter results',function(done){
        assert.isFunction(Controller.showFilter);
        Controller.showFilter()
        assert.fail();
    });
});
