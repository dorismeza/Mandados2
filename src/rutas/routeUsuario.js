const  Rutas  = require('express');
const controlador = require('../controladores/controladorUsuario');
const {body, query} = require('express-validator');
const route = Rutas();
const controladorAutenticacion = require('../controladores/controladosAutenticacion');


route.get('/', controlador.inicio);
route.get('/listar', controladorAutenticacion.validarAutenticado , controlador.ListarUsuarios);

//REGISTRARSE
route.post('/registrarse', 
body('correo').isEmail().withMessage("Debe ecribir una dirección de correo válida."),
body('contrasena').isLength({min: 6}).withMessage("Debe contener como mínimo 6 caracteres"),
body('idtipo').isInt().withMessage("Debe ingresar el tipo de Usuario"),
controlador.registrarse);

//MODIFICAR
route.put('/modificar', 
query('id').isInt().withMessage("Debe ingresar el id del usuario"),
body('contrasena').isLength({min: 6}).withMessage("Debe contener como mínimo 6 caracteres"), controladorAutenticacion.validarAutenticado ,
controlador.modificarContraseña);


route.post('/deshabilitar', 
body('correo').isEmail().withMessage("Debe ecribir una dirección de correo válida."),
controladorAutenticacion.validarAutenticado,
controlador.deshabilitar);

route.get('/error', controladorAutenticacion.ErrorAutenticacion);




module.exports = route;