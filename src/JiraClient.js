'use strict';
var uri = require('uri-templates');
var _ = require('lodash');

module.exports = function(request) {
    // Full documentation and more endpoints:
    // https://docs.atlassian.coma/jira/REST/latest/

    var endpoints = {
        get: {
            BoardData: uri("/rest/api/2/board/{boardId}/data"),
            Filter: uri("/rest/api/2/filter/{id}"),
            IssueTransitions: uri('/rest/api/2/issue/{issueIdOrKey}/transitions'),
            IssueComment: uri('/rest/api/2/issue/{issueIdOrKey}/comment'),
            Issue: uri('/rest/api/2/issue/{issueIdOrKey}'), 
            Projects: uri('/rest/api/2/project'), // recent
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

    var methods={};
    // Assign export methods
    _.forEach(endpoints, function(commands, method) {
        _.forEach(commands, function(uri, command) {
            var methodName = "" + method + command;
            methods[methodName] = function(params, data){
                var host = "https://example.com";
                var route = uri.fill(params);

                var options = {
                    resolveWithFullResponse: true,
                    method: method,
                    uri: host + route,
                    json: true
                };

                if (method !== "get") {
                    options[data] = data;
                }

                return request(options).catch(function(message){
                    // If I don't have a catch here, request-promise decides
                    // to throw an error.
                });;
            };
        });
    });

    return methods;
}

