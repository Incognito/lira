var controller = function(bluebird, JiraClient){
    this.bluebird = bluebird;
    this.JiraClient = JiraClient;
};

controller.prototype.newIssue = function(title){
    // TODO interactive get input from somewhere
    // TODO add to client: GET /rest/api/2/issue/createmeta
    var data = {
        // TODO
    };
    this.JiraClient.postIssue(undefined, data).then(function(message){
        // console.log(message)
    });
};

controller.prototype.showIssue = function(jiraID){
    this.bluebird.all([
        this.JiraClient.getIssue(jiraID),
        this.JiraClient.getIssueTransitions(jiraID)
    ]).then(function(){
        // TODO transform response
        // console.log(message)
    })
};

controller.prototype.postIssueComment = function(jiraID, comment){
    var data = {
        // TODO
    };
    this.JiraClient.postIssueComment(jiraID, data).then(function(meshowBoardssage){
    });
};

controller.prototype.transitionIssue = function(jiraID, transition){
    var data = {
        // TODO
    };
    this.JiraClient.postIssueTransition(jiraID, data).then(function(message){
    });

    // TODO need to fetch available transitions to map out states to names
    // TODO transform response
};

controller.prototype.uploadAttachmentToIssue = function(jiraID, filePath){
    // TODO I think Jira Client needs some tweaking to be able to upload a
    // file, request-promise probably can't do it based on the API docs.
    this.JiraClient.postIssueAttachment(jiraID).then(function(message){
    });

};

controller.prototype.assignSelfToIssue = function(jiraID){
    var data = {
        "name": "Foo Bar" // TODO get name from config
    };
    this.JiraClient.putIssueAssignee(jiraID, data).then(function(message){
    });
};

controller.prototype.showBoard = function(boardID){
    this.JiraClient.getBoardData(boardID).then(function(message){
    });
};

controller.prototype.jqlSearch = function(jql, startAt, maxResults){
    this.JiraClient.getSearch().then(function(message){
    }); // params: jql, startAt, maxResults
};

controller.prototype.showProjects = function(isRecent){
    var data = {
        // TODO -- recent: is an int value, not a bool.
    };
    this.JiraClient.getProjects(undefined, data).then(function(message){
    }); // params: recent
};

controller.prototype.showFilter = function(filterID){
    this.JiraClient.getFilter(filterID).then(function(message){
    });
};

module.exports = function (bluebird, JiraClient) {
    return new controller(bluebird, JiraClient);
}
