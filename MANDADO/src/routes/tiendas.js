const express = require('express');
const AppControler = require ('../controllers/AppController');
const {noLogged, logged} = require('../helpers/auth');
const {upload} = require('../helpers/uploadFile');

const routes = express.Router();

routes.get('/comidas', logged, AppControler.comidas);
routes.get('/bebidas', logged, AppControler.bebidas);
routes.get('/postres', logged, AppControler.postres);


routes.get('/comidas', noLogged, AppControler.comidas);
routes.get('/bebidas', noLogged, AppControler.bebidas);
routes.get('/postres', noLogged, AppControler.postres);



module.exports = routes;