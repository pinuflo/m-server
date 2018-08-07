var express = require('express');
var cors = require('cors')

var app = express();
app.use(cors());

var db = require('./db');

//Index route
app.get('/', (req, res,next) => {
    res.send('Servidor corriendo...');
});

//AUTH api
var AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);



module.exports = app;