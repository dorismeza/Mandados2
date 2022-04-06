const { Router } = require('express');
const AppControler = require('../controladores/controladorApp');
const controladorProductos = require('../controladores/controladorProductos');
const router = Router();

router.get('/', AppControler.index);
router.get('/login', AppControler.login);
router.get('/tienda', AppControler.tienda);
router.get('/productos', controladorProductos.listarproductos); //hola
router.get('/comercios', AppControler.comercios); 


module.exports= router;