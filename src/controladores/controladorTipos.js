const ModeloTipo = require('../modelos/modeloTipo');
const msj = require('../componentes/mensaje');
const {validationResult} = require('express-validator');
const { Op } = require("sequelize");
exports.listarTipos = async (req, res) => {
    try
    {
        const tipos = await ModeloTipo.findAll({
             attributes: [
                 'nombre', 'imagen'
                ]
        });
        msj("Petición procesada correctamente", 200, tipos, res);
    }
    catch(error){
        msj("Ocurrio un error en el servidor", 500, error, res);
    }
};
exports.BuscarTipo = async (req, res) => {
    const validacion=validationResult(req);
    if (!validacion.isEmpty())
    {
        msj("Los datos ingresados no son validos", 200, validacion.array(), res);
    }
    else{
        //%Ref%
        const filtro = '%' + req.body.nombre + '%';
        console.log(filtro);
        try
        {
            const BuscarTipos = await ModeloTipo.findAll({
                attributes: [
                    'id', 'nombre', 'activo', 'imagen'
                    ],
                where:{
                    [Op.and]:[{
                        nombre:{
                            [Op.like]: filtro
                        },
                        activo: true,
                    }],
                }
            });
            msj("Peticion procesada correctamente", 200, BuscarTipos, res);
        }
        catch{
            msj("Ocurrio un error en el servidor", 500, [], res);
        }
    }
    
};
exports.Guardar= async (req, res) =>{
    const validacion=validationResult(req);
    if (!validacion.isEmpty())
    {
        msj("Los datos ingresados no son validos", 200, validacion.array(), res);
    }
    else{
        const {nombre, imagen} = req.body;
        const BuscarTipo = await ModeloTipo.findOne({
            where:{
                nombre: nombre
            }
        });
        if(!BuscarTipo){
            if(!imagen){
                await ModeloTipo.create({
                    nombre,
                })
                .then((data)=>{
                    tipo = {
                        nombre: data.nombre,
                        imagen: data.imagen
                    };
                    msj("Peticion procesada correctamente", 200, tipo, res);
                })
                .catch((error) =>{
                    msj("Peticion procesada correctamente", 200, error, res);
                });
            }
            else{
               await ModeloTipo.create({
                nombre,
                imagen
            }); 
            }
        }
        else{
            msj("Ya exite un tipo con este nombre", 200, BuscarTipo, res);
        }
    }
};