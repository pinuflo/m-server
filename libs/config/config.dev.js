const path = require('path');

let config = {};

config.logFileDir = path.join(__dirname, '../../log');
config.logFileName = 'app.log';
config.dbHost = process.env.dbHost || 'mongo';
config.dbPort = process.env.dbPort || '27017';
config.dbName = process.env.dbName || 'kiberapp-db';
config.serverPort = process.env.serverPort || 3000;

//datos momentaneos
config.secret = 'supersecret';
config.database_url_dev = 'mongodb://pkibernum:kiberserver2018@ds131531.mlab.com:31531/kiberad';


module.exports = config;
