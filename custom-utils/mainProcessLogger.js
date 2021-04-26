var nodeConsole = require('console');
var mainLogger = new nodeConsole.Console(process.stdout, process.stderr);

module.exports = mainLogger;