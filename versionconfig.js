var rootdir = env.rootdir || __dirname;
var appConfig = require('appconfig');
var versionConfig = require(rootdir + appConfig.ConfigurationFilePath.Version);

module.exports = versionConfig;
