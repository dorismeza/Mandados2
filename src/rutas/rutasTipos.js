const { Router } = require('express');
const ControladorTipos = require('../controladores/controladorTipos');
//const controladorAutenticacion = require('../controladores/autenticacion');
const {body} = require('express-validator');
const router = Router();
router.get('/lista', ControladorTipos.listarTipos);
router.post('/buscar', ControladorTipos.BuscarTipo);
router.post('/guardar',
body('nombre').isLength({min:3}).withMessage('La longitud minima del nombre es de 3 caracteres'),
ControladorTipos.Guardar
);
module.exports=router;