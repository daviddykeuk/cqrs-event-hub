require('dotenv').config();

var Socket = require('./lib/socket');
var socket = new Socket();

const express = require('express')
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());

var repo = require('./lib/repository');
var api = require('./src/api');
api.init(app, repo, socket);

app.listen(process.env.API_PORT, () => console.log('API listening on port %s', process.env.API_PORT));