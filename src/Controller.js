var controller = function(bluebird, JiraClient){
    this.bluebird = bluebird;
    this.JiraClient = JiraClient;
};

controller.prototype.newIssue = function(title){
    // TODO interactive get input from somewhere
    // TODO create issue this.JiraClient.postIssue().then(function(message){ });
};

controller.prototype.showIssue = function(jiraID){
    this.bluebird.all([
        this.JiraClient.getIssue(id),
        this.JiraClient.getIssueTransitions(id)
    ]).then(function(){});
    // TODO transform data
};

controller.prototype.postIssueComment = function(jiraID, comment){
    this.JiraClient.postIssueComment(id).then(function(meshowBoardssage){
    });
};

controller.prototype.transitionIssue = function(jiraID, transition){
    this.JiraClient.postIssueTransition(id).then(function(message){
    });

    // TODO transform data
};

controller.prototype.uploadAttachmentToIssue = function(jiraID, filePath){
    this.JiraClient.postIssueAttachment(id).then(function(message){
    });

};

controller.prototype.assignSelfToIssue = function(jiraID){
    this.JiraClient.putIssueAssignee().then(function(message){
    });
};

controller.prototype.showBoard = function(boardID){
    this.JiraClient.getBoardData().then(function(message){
    });
};

controller.prototype.jqlSearch = function(jql, startAt, maxResults){
    this.JiraClient.getSearch().then(function(message){
    }); // params: jql, startAt, maxResults
};

controller.prototype.showProjects = function(isRecent){
    this.JiraClient.getProjects() // params: recent
};

controller.prototype.showFilter = function(filterID){
    this.JiraClient.getFilter()
};

module.exports = function (bluebird, JiraClient) {
     return new controller(bluebird, JiraClient);
}
