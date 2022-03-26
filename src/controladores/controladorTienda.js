const { validationResult } = require("express-validator");
const ModeloTienda= require('../modelos/modeloTienda');
exports.listarTiendas = async (req, res) =>{
    const listaTiendas = await ModeloTienda.findAll();
    if(!listaTiendas){
        res.send("No existe ninguna tienda en la base de datos.");
    }
    else{
        res.json(listaTiendas);
    }
};

exports.listarXCategorias = async (req, res) => {
    const validacion = validationResult(req);
    if (!validacion.isEmpty()) {
        console.log(validacion.array());
        res.send("Error en los datos enviados.");
    }
    else {
        const { id } = req.query;
        var buscarTienda = await ModeloTienda.findAll({
            where: {
                idCategoria: id
            }
        });
    }
    if (!buscarTienda) {
        res.send("El id de la categoría no existe.");
    }
    else {
        res.json(buscarTienda);
    }
};

exports.guardar = async (req, res) =>{
    const validacion = validationResult(req);
    if(!validacion.isEmpty()){
        console.log(validacion.array());
        res.send("Error en los datos enviados.");
    }
    else{
        const { nombre, telefono, direccion, categoria, activo, imagen } = req.body;
        await ModeloTienda.create({
            nombreTienda: nombre,
            telefono: telefono,
            direccion: direccion,
            idCategoria: categoria,
            activo: activo,
            imagen: imagen,
        })
        .then((data)=>{
            console.log(data);
            res.send("Registro almacenado en la base de datos.");
        }).catch((error)=>{
            console.log(error);
            res.send("Error al guardar el registro en la base de datos.");
        });
    }
};
exports.modificar = async (req, res) =>{
    const validacion = validationResult(req);
    if(!validacion.isEmpty()){
        console.log(validacion.array());
        res.send("Error en los datos enviados.");
    }
    else{
        const {id}=req.query;
        const { nombre, telefono, direccion, categoria, activo, imagen}=req.body;
        var buscarTienda = await ModeloTienda.findOne({
            where:{
                idTienda: id
            }
        });
        if(!buscarTienda){
            res.send("El id de la tienda no existe.");
        }
        else{
            buscarTienda.nombreTienda=nombre;
            buscarTienda.telefono=telefono;
            buscarTienda.direccion=direccion;
            buscarTienda.idCategoria=categoria;
            buscarTienda.activo=activo;
            buscarTienda.imagen=imagen;
            await buscarTienda.save()
            .then((data)=>{
                console.log(data);
                res.send("El registro de la tienda se ha actualizado.");
            })
            .catch((error)=>{
                console.log(error);
                res.send("Error al actualizar registro de la tienda.");
            });
        }
    }
};
exports.eliminar = async (req, res) =>{
    const validacion = validationResult(req);
    if(!validacion.isEmpty()){
        console.log(validacion.array());
        res.send("Debe enviar el id de la tienda");
    }
    else{
        const {id}=req.query;
        var buscarTienda = await ModeloTienda.findOne({
            where:{
                idTienda: id
            }
        });
        if(!buscarTienda){
            res.send("El id de la tienda no existe.");
        }
        else{
            buscarTienda.activo=0;
            await buscarTienda.save()
            .then((data)=>{
                console.log(data);
                res.send("El registro de la tienda se ha desactivado.");
            })
            .catch((error)=>{
                console.log(error);
                res.send("Error al desactivar registro de la tienda.");
            });
        }
    }
};