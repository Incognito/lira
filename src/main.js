'use strict';

var request = require('request-promise');

var config = require('./Configuration');
var JiraClient = require('./JiraClient')(request);
