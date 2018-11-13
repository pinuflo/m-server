const express = require('express');
var VerifyToken = require('../controllers/VerifyToken');
var StorageImage = require('../controllers/StorageImage');
const authController = require('../controllers/AuthController');
const articleController = require('../controllers/ArticleController');
const regionController = require('../controllers/RegionController');
const logger = require('../libs/logger/app-logger');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Bienvenidos a la API');
});

/** Auth Routes */
router.post('/auth/register', (req, res) => {
    authController.register(req, res);
});

router.get('/auth/me', VerifyToken, (req, res, next) => {
    authController.getMe(req, res, next);
});

router.post('/auth/login', (req, res) => {
    authController.login(req, res);
});

router.get('/auth/logout', (req, res) => {
    authController.logout(req, res);
});

/** User Routes */

/** Articles Routes */
router.get('/articles', (req, res) => {
    articleController.getAll(req, res);
});

router.get('/articles/:id', (req, res) => {
    articleController.getDetail(req, res);
});

router.post('/articles', (req, res, next) => {
    articleController.addArticle(req, res, next);
});
/** ---------------------------------------------- */

router.get('/regions', (req, res) => {
    logger.info("regiones");
});

router.get('/regions/:id', (req, res) => {
    logger.info("region_id");
});

router.post('/regions', (req, res) => {
    logger.info("entre al posrt");
    regionController.addRegion(req, res);
});


module.exports = router;    