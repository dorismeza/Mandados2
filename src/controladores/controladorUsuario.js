const modeloUsuario = require('../modelos/modelUsuario');
const { validationResult } = require('express-validator');
const  msj  = require('../componentes/mensaje');


exports.inicio = (req, res) => {
    res.send("Inicio Usuarios");
};

exports.ListarUsuarios = async (req, res) => {
    const listar = await modeloUsuario.findAll();
    if (listar.lenfth == 0) {
        res.send("No existen Usuarios");
        msj("Ocurrio un error en el servidor", 500, error, res);
    } else {
        res.json(listar)
        msj("Petición procesada correctamente", 200, tipos, res);
    }
};

exports.registrarse = async (req, res) =>{
   // const validacion = validationResult(req);
    const {correo, contrasena, nombre, apellido, telefono} = req.body;
    

    if(!correo || !contrasena || !nombre || !apellido || !telefono ){
        msj("Los datos ingresados No son Válidos", 200, [] , res);
    }else{

        const buscarUsuario = await modeloUsuario.findOne({
            where: {
                correo: correo
            }
        })
        if(buscarUsuario){
            msj("El usuario ya existe", 200, [], res);
        }else{
                  await modeloUsuario.create({
            correo: correo,
            contrasena: contrasena,
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,  
        })
        .then((data) => {
            console.log(data.contrasena);
            msj("Usuario Registrado", 200, [] , res);
        })
        .catch((error) => {
            console.log(error);
            msj("Ha ocurrido un error al registrarse", 200, [] , res);
        });
        }
  
    }
    }; 


exports.modificarContraseña = async (req, res) => {
    const { id } = req.query;
    const { contrasena } = req.body;

    const data = controladorA.data;
    console.log(data)

    //const validacion = validationResult(req);

   
        if (!id || !contrasena) {
            res.send("Envie los datos obligatorios")
        } else {
            var buscarUsuario = await modeloUsuario.findOne({
                where: {
                    id: id,
                    activo: true
                }
            })
            if (!buscarUsuario) {
                res.send("El usuario no existe o está inactivo");
            }
            else {

                buscarUsuario.contrasena = contrasena;

                await buscarUsuario.save()
                    .then((data) => {
                        console.log(data);
                        res.send("Registro modificado");
                    })
                    .catch((error) => {
                        console.log(error);
                        res.send("Error al modificar los datos")
                    });
            }

        }
    };


exports.deshabilitar = async (req, res) => {
    const { id } = req.query;
    //const validacion = validationResult(req);

        if (!id) {
            res.send("Debe enviar los datos obligatorios");
        }
        else {
            const buscarUsuario = await modeloUsuario.findOne({
                where: {
                    id: id,
                    activo: true
                }
            })
            if (!buscarUsuario) {
                res.send("El usuario no existe");
            } else {

                buscarUsuario.activo = false

                
                await buscarUsuario.save()
                    .then((data) => {
                        console.log(data);
                        res.send("Registro modificado");
                    })
                    .catch((error) => {
                        console.log(error);
                        res.send("Error al modificar los datos")
                    });
            }


        }
};
