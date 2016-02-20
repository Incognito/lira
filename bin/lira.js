#!/usr/bin/env node

// TODO: autocompletion https://nodejs.org/api/readline.html#readline_readline_createinterface_options
// FIXME the actions of each command can go into a controller.
var program = require('commander');

program
  .command('issue <id>')
  .description('Work with issues')
  .option("-n, --new <title>","Interactively create a new JIRA")
  .option("-t, --transition <state>","transition to state for a JIRA id")
  .option("-c, --comment <message>","Comment on a JIRA ID")
  .option("-u, --upload <path>","Upload a file to a JIRA ID")
  .option("-a, --assign","Assign self to a JIRA")
  .action(function (options) {
      console.log("Not implemented");
      // This needs a sub controller
      // TODO JiraClient.getIssue(id)+getIssueComment(id)+getIssueTransitions(id);

      // TODO create issue JiraClient.postIssue()
      // TODO transition issue JiraClient.postIssueTransition(id)
      // TODO comment JiraClient.postIssueComment(id);
      // TODO attachment JiraClient.postIssueAttachment(id);
      // TODO claim JIRA putIssueAssignee: uri('/rest/api/2/issue/{issueIdOrKey}/assignee'),
  });

program
  .command('board <id>')
  .description('show issue information')
  .action(function (options) {
      console.log("Not implemented");
      // TODO JiraClient.getBoardData
  });

program
  .command('search <jql>')
  .description('search with JQL')
  .option("-s, --startAt","start at date")
  .option("-n, --number","limit results to n-items")
  .action(function (options) {
      console.log("Not implemented");
      // TODO getSearch: // params: jql, startAt, maxResults
  });

program
  .command('Project <id>')
  .description('show project information')
  .option("-r, --recent","Show recent projects")
  .action(function (options) {
      console.log("Not implemented");
      // TODO getProject // params: recent
  });

program
  .command('filter <id>')
  .description('show results from a saved filter')
  .action(function (options) {
      console.log("Not implemented");
      // TODO getFilter
  });


program
  .command('issue <id>')


program.parse(process.argv);

if (program.args.length === 0) {
    program.help();
}

// TODO plugin commands from users in ~/.lira
