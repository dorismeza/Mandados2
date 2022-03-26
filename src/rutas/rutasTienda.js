const { Router } =require('express');
const controladorTienda = require('../controladores/controladorTienda');
const { body, query } = require('express-validator');
const router = Router();
router.get('/listar', controladorTienda.listarTiendas);

router.get('/listarXCategoria', 
query('id').isInt().withMessage('Debe enviar el id de la categoría'), 
controladorTienda.listarXCategorias);

router.post('/guardar', 
body('telefono').isLength({min:8}).withMessage('Ingrese un número de teléfono válido'), 
body('telefono').isNumeric().withMessage('Ingrese un número de teléfono válido'), 
controladorTienda.guardar);



router.put('/modificar', 
query('id').isInt().withMessage('Debe enviar el id de la tienda'), 
body('telefono').isLength({min:8}).withMessage('Ingrese un número de teléfono válido'), 
body('telefono').isNumeric().withMessage('Ingrese un número de teléfono válido'), 
controladorTienda.modificar);


router.put('/eliminar', 
query('id').isInt().withMessage('Debe enviar el id de la tienda'), 
controladorTienda.eliminar);

module.exports = router;