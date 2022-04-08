const express = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const {noLogged, logged} = require('../helpers/auth');

const routes = express.Router();

routes.get('/create-usuario', noLogged, UsuarioController.create);

routes.post('/store-usuario', noLogged, UsuarioController.store);

module.exports = routes;