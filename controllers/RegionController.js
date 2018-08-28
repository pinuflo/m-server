const Region = require('../models/Region');
const logger = require('../libs/logger/app-logger');

const controller = {};

controller.addRegion = async (req, res) => {
    logger.info("Entre al controlador");

    let regionToAdd = Region({
      name: req.body.name,
      communes: req.body.communes,
      ordinal: req.body.ordinal
    });
  
    logger.info(regionToAdd);
  
    try {
      const saveRegion = await Region.addRegion(regionToAdd);
      logger.info('Agregando region');
      res.status(200).send("Agregado");
    }
    catch(err) {
      logger.error('Error agregando region: '+ err);
      res.status(500).send('Error agregando region');
    }
}
  
module.exports = controller;