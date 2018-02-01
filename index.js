const config = require('./jsf.json');

import {
    Server
} from './src/Server.js';
import {
    Json
} from './src/Json.js';
import {
    Files
} from './src/Files.js';

const server = new Server(config.port);
server.start();
const json = new Json(__dirname + '/' + config.jsonStorage, config.jsonData, server);
json.start();
const files = new Files(__dirname + '/' + config.fileStorage, config.fileData, server);
files.start();