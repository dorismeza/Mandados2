const { Router } = require('express');
const router = Router();
const AppControler = require('../controladores/controladorApp');


router.get('/', AppControler.index);
router.get('/login', AppControler.login);
router.get('/tienda', AppControler.tienda);

module.exports= router;
