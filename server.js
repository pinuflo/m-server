const express = require('express');
const logger = require('./libs/logger/app-logger');
const morgan = require('morgan');
const config = require('./libs/config/config.dev');
const connectToDb = require('./libs/db/connect')
const cors = require('cors');
const router_api = require('./routes/routes_api');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');


const app = express();

connectToDb();

const port = config.serverPort;

logger.stream = {
  write(message, encoding) {
    logger.info(message);
  },
};


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(multipart());


//app.use(morgan('dev', { stream: logger.stream }));

app.use(morgan('dev', {
    skip: function (req, res) {
        return res.statusCode < 400
    }, stream: process.stderr
}));

app.use(morgan('dev', {
    skip: function (req, res) {
        return res.statusCode >= 400
    }, stream: process.stdout
}));

//Rutas api 
app.use('/api', router_api);

//Index route
app.get('/', (req, res) => {
    res.send('Service');
});

//AUTH api
//var AuthController = require('./auth/AuthController');
//app.use('/api/auth', AuthController);

app.listen(port, function() {
    logger.info('Servidor corriendo - ', port);
});

