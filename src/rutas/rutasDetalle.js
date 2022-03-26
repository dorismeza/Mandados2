const { Router } =require('express');
const controladorDetalle = require('../controladores/controladorDetallePedido');
const { body, query } = require('express-validator');
const router = Router();
router.get('/listar', controladorDetalle.listarDetalle);
router.post('/guardar', body('cantidad').isNumeric({min:1}), controladorDetalle.guardar);
router.put('/modificar', query('id').isInt().withMessage('Debe enviar el id del detalle de pedido'), 
body('cantidad').isNumeric({min:1}), controladorDetalle.modificar);
module.exports = router;