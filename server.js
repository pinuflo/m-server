const express = require('express');
const logger = require('./libs/logger/app-logger');
const morgan = require('morgan');
const config = require('./libs/config/config.dev');
const db = require('./db');
const cors = require('cors')
const router_api = require('./routes/routes_api')

const app = express();

const port = config.serverPort;

logger.stream = {
  write(message, encoding) {
    logger.info(message);
  },
};

app.use(cors());
app.use(morgan('dev', { stream: logger.stream }));

//Rutas api 
app.use('/api', router_api);

//Index route
app.get('/', (req, res) => {
    res.send('Service');
});

//AUTH api
var AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);

app.listen(port, function() {
    console.log('Server corriendo en puerto  ', port);
    logger.info('Servidor corriendo - ', port);
});

