'use strict';

var assert = require('chai').assert;
var bluebird = require('bluebird');
var JiraClient = require('../src/JiraClient')(require('request-promise'));

var Controller = require('../src/Controller')(bluebird, JiraClient);

describe('Controller', function(){
    it('should post a new issue',function(done){
        assert.isFunction(Controller.newIssue);
        Controller.newIssue('Hello')
        assert.fail();
        done();
    });

    it('should show an issue',function(done){
        assert.isFunction(Controller.showIssue);
        Controller.showIssue('ABC-123');
        assert.fail();
        done();
    });

    it('should post a comment on an issue',function(done){
        assert.isFunction(Controller.postIssueComment);
        Controller.postIssueComment('ABC-123', 'Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?');
        assert.fail();
        done();
    });

    it('should transition an issue',function(done){
        assert.isFunction(Controller.transitionIssue);
        Controller.transitionIssue('ABC-123', 'NewState');
        assert.fail();
        done();
    });

    it('should upload an attachment to an issue',function(done){
        assert.isFunction(Controller.uploadAttachmentToIssue);
        Controller.uploadAttachmentToIssue('ABC-123', './data/attachment');
        assert.fail();
        done();
    });

    it('should assign self to an issue',function(done){
        assert.isFunction(Controller.assignSelfToIssue);
        Controller.assignSelfToIssue('ABC-123')
        assert.fail();
        done();
    });

    it('should display a board',function(done){
        assert.isFunction(Controller.showBoard);
        Controller.showBoard('BOARD')
        assert.fail();
        done();
    });

    it('should return JQL results',function(done){
        assert.isFunction(Controller.showBoard);
        Controller.jqlSearch('created > startOfDay(-0d)')
        assert.fail();
        Controller.jqlSearch('created > startOfDay(-0d)', 10)
        assert.fail();
        Controller.jqlSearch('created > startOfDay(-0d)', 10, 1)
        assert.fail();
        done();
    });

    it('should display project details',function(done){
        assert.isFunction(Controller.showFilter);
        Controller.showProjects(false)
        assert.fail();
        done();
    });

    it('should display filter results',function(done){
        assert.isFunction(Controller.showFilter);
        Controller.showFilter('FILTER')
        assert.fail();
        done();
    });
});
