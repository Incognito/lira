'use strict';

/**
 * The only purpose of this file is to provide a
 * common and sensical spot for dependency
 * injection.
 */
var request = require('request-promise');

var config = require('./Configuration');
var JiraClient = require('./JiraClient')(request);
