const Article = require('../models/Article');
const logger = require('../libs/logger/app-logger');
const multer = require('multer');
const crypto = require('crypto');

const controller = {};


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'images/articles')
  },
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      var extension = file.originalname.split('.').pop();
      cb(null, raw.toString('hex') + Date.now() + '.' + extension);
    });
  }
});



var upload = multer({ storage: storage }).single('imagen');


controller.addArticle = async (req, res) => {

  upload(req, res, function (err) {
    logger.info(">>>",req.file.filename);
    if (err) {
        // An error occurred when uploading
        logger.error('Error subiendo imagen: ', err);
        res.json({
          success: false,
          message: err
        });
    } else {
      res.json({
        success: true,
        message: 'Imagen subida'
      });
    }
  });

  let articleToAdd = Article({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    user: req.body.user,
    category: req.body.category,
    region: req.body.region,
    comunne: req.body.comunne,
    imagen: "imagen.name"
  });

  //logger.info(articleToAdd);

  //try {
    //const saveArticle = await Article.addArticle(articleToAdd);

    //logger.info(' articulo agregado');
    //res.status(200).send("ok");
  //}
  //catch(err) {
    //logger.error('Error agregando articulo: '+ err);
    //res.status(500).send('Error agregando articulo');
 // }
}

controller.getAll = async (req, res) => {
  try {
    const articles = await Article.getAll();
    logger.info('Obteniendo articulos');
    res.send(articles);
  }
  catch(err) {
    logger.error('Error obteniendo los articulos: ' + err);
    res.send('Ver getAll');
  }
}

controller.getDetail = async (req, res) => {
  try {
    const article = await Article.getDetail(req.params.id);
    logger.info('obteniendo articulo');
    res.send(article);
  }
  catch(err) {
      logger.error('Error obteniendo detalle de articulo: ' + err);
      res.status(500).send('error detalle articulo');
  }
}

module.exports = controller;