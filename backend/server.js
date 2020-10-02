const http = require('http');
const mongoose = require('mongoose');
const requireDir = require("require-dir");

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useUnifiedTopology: true, useNewUrlParser: true });
requireDir("./src/models");


const app = require('./app');
const port = process.env.PORT || 3001;
const server = http.createServer(app);
server.listen(port);