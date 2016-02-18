'use strict';

var uri = require('uri-templates');
var _ = require('lodash');

// Full documentation and more endpoints:
// https://docs.atlassian.coma/jira/REST/latest/

var endpoints = {
    get: {
        BoardData: uri("/rest/api/2/board/{boardId}/data"),
        Filter: uri("/rest/api/2/filter/{id}"),
        IssueTransitions: uri('/rest/api/2/issue/{issueIdOrKey}/transitions'),
        IssueComment: uri('/rest/api/2/issue/{issueIdOrKey}/comment'),
        Issue: uri('/rest/api/2/issue/{issueIdOrKey}'), 
        Project: uri('/rest/api/2/project'), // recent
        Search: uri('/rest/api/2/search'), // jql, startAt, maxResults
    },
    post: {
        Issue: uri('/rest/api/2/issue'),
        IssueComment: uri('/rest/api/2/issue/{issueIdOrKey}/comment'),
        IssueTransition: uri('/rest/api/2/issue/{issueIdOrKey}/comment'),
        IssueAttachment: uri('/rest/api/2/issue/{issueIdOrKey}/comment'),
    },
    put: {
        IssueAssignee: uri('/rest/api/2/issue/{issueIdOrKey}/assignee'),
    }
};

// Assign export methods
_.forEach(endpoints, function(commands, method) {
    _.forEach(commands, function(uri, command) {
        var methodName = "" + method + command;
        exports[methodName] = uri.fill;
    });
});
