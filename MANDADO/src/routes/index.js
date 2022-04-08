const express = require('express');
const AppController = require('../controllers/AppController');
const ComentarioController = require('../controllers/ComentarioController');
const {noLogged, logged} = require('../helpers/auth');

const routes = express.Router();

routes.get('/', noLogged, AppController.index);
routes.get('/comments', logged, ComentarioController.index);
routes.get('/login', noLogged, AppController.login);

routes.get('/comidas', logged, AppController.comidas);
routes.get('/bebidas', logged, AppController.bebidas);
routes.get('/postres', logged, AppController.postres);
routes.get('/pedidos', logged, AppController.pedidos);





module.exports = routes;