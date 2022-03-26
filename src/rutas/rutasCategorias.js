const { Router } =require('express');
const controladorCategoria = require('../controladores/controladorCategoria');
const router = Router();
router.get('/', controladorCategoria.inicio);
router.get('/listar', controladorCategoria.listarcategoria);
router.post('/guardar', controladorCategoria.guardar);
router.put('/modificar', controladorCategoria.modificar);
router.delete('/eliminar', controladorCategoria.eliminar);
module.exports = router;