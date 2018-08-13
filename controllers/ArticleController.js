const Article = require('../models/Article');
const logger = require('../libs/logger/app-logger');

const controller = {};

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

controller.addArticle = async (req, res) => {
  let articleToAdd = Article({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    user: req.body.user,
    category: req.body.category,
    region: req.body.region,
    comunne: req.body.comunne
  });

  try {
    const saveArticle = await Article.addArticle(articleToAdd);
    logger.info('Agregando articulo');
    res.status(200).send(saveArticle);
  }
  catch(err) {
    logger.error('Error agregando articulo: '+ err);
    res.status(500).send('Error agregando articulo');
  }
}

constroller.getDetail = async (req, res) => {
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

module.export = controller;