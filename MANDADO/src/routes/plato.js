const express = require('express');
const PlatoController = require('../controllers/PlatoController');
const {noLogged, logged} = require('../helpers/auth');
const {upload} = require('../helpers/uploadFile');

const routes = express.Router();

/*routes.get('/get-platos', noLogged, PlatoController.index);
routes.get('/get-platos2', noLogged, PlatoController.index2);
routes.get('/get-platos3', noLogged, PlatoController.index3);
routes.get('/get-platos4', noLogged, PlatoController.index4);*/

routes.get('/get-platos', logged, PlatoController.index);
routes.get('/get-platos2', logged, PlatoController.index2);
routes.get('/get-platos3', logged, PlatoController.index3);
routes.get('/get-platos4', logged, PlatoController.index4);

module.exports = routes;