var express = require('express');
var app = express();
var db = require('./db');

//Index route
app.get('/', (req, res) => {
    res.send('Servidor corriendo...');
});

//AUTH api
var AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);



module.exports = app;