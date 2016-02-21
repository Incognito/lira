#!/usr/bin/env node

// TODO: autocompletion https://nodejs.org/api/readline.html#readline_readline_createinterface_options
// FIXME the actions of each command can go into a controller.
var program = require('commander');
var app = require ('../src/main.js');

program
  .command('issue <id>')
  .description('Work with issues')
  .option("-n, --new <title>","Interactively create a new JIRA")
  .option("-t, --transition <state>","transition to state for a JIRA id")
  .option("-c, --comment <message>","Comment on a JIRA ID")
  .option("-u, --upload <path>","Upload a file to a JIRA ID")
  .option("-a, --assign","Assign self to a JIRA")
  .action(function (options) {
      /*
      controller.newIssue()
      controller.showIssue()
      controller.postIssueComment()
      controller.transitionIssue()
      controller.uploadAttachmentToIssue()
      controller.assignSelfToIssue()
      */
      console.log("Not implemented");
  });

program
  .command('board <id>')
  .description('show issue information')
  .action(function (options) {
      console.log("Not implemented");
      //controller.showBoard
  });

program
  .command('search <jql>')
  .description('search with JQL')
  .option("-s, --startAt","start at date")
  .option("-n, --number","limit results to n-items")
  .action(function (options) {
      console.log("Not implemented");
      // controller.jqlSearch
  });

program
  .command('Projects')
  .description('show projects available to you')
  .option("-r, --recent","Show recent projects")
  .action(function (options) {
      console.log("Not implemented");
      // controller.showProjects
  });

program
  .command('filter <id>')
  .description('show results from a saved filter')
  .action(function (options) {
      console.log("Not implemented");
      // controller.showFilter
  });


program
  .command('issue <id>')


program.parse(process.argv);

if (program.args.length === 0) {
    program.help();
}

// TODO plugin commands from users in ~/.lira
