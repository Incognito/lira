'use strict';

// FIXME has no tests

var fs = require('fs');
var nconf = require('nconf');

var configPath = process.env.HOME + '/.lira/';

function determineValue(nconf, key) {
    var value = nconf.get(key);
    if ('undefined' !== typeof value) {
        return value
    }
    // TODO prompt for value
    nconf.set(key, 'hoo hoo');
    nconf.save();

    return nconf.get(key)
};

try {
    var lstat = fs.lstatSync(configPath);
} catch (exception) {
    // TODO make more user friendly error messages
    // (or prevent the errors in the first place where possible)
    console.log('Creating directory for lira config files', configPath);
    var saneUserDirChmod =  0o755; // 0o prefix because chmod is base 8
    fs.mkdirSync(configPath, saneUserDirChmod);
}

nconf
    .env()
    .file('config', {
        file: configPath + 'config.json',
        secure: {
            // FIXME offer a real way to offer an encrypt secret
            secret: 'CHANGEME',
            alg: 'aes-256-ctr'
        }
    });

exports.config = {
    user: determineValue(nconf, 'user'),
    password: determineValue(nconf, 'password'),
    domain: determineValue(nconf, 'domain')
};
