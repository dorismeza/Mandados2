const  Rutas  = require('express');
const controlador = require('../controladores/controladorPedido');
const {body, query} = require('express-validator');
const controladorAutenticacion = require('../controladores/controladosAutenticacion')
const route = Rutas();

//GUARDAR PEDIDO

route.post('/guardarPedido', controladorAutenticacion.validarAutenticado,
body('idUsuario').isInt().withMessage("Debe ingresar el ID del usuario"),
body('direccion').isString().withMessage("Ingrese la dirección"),
body('formapago').isLength({min: 6}).withMessage("Debe ingresar la forma de pago"),
controlador.guardarPedido);

// CANCELAR PEDIDO





module.exports = route;