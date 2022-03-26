const { validationResult } = require("express-validator");
const ModeloDetalle= require('../modelos/modeloDetallePedido');
exports.listarDetalle = async (req,res) => {
    const listaDetalles = await ModeloDetalle.findAll();

    if(!listaDetalles.lefth == 0){
        res.send("No existe ningún detalle de pedido en la base de datos.");
    }
    else{
        res.json(listaDetalles);
    }
};
exports.guardar = async (req,res) => {
    const validacion = validationResult(req);
    if(!validacion.isEmpty()){
        console.log(validacion.array());
        res.send("Error en los datos enviados.");
    }
    else{
        const { idpedido, idproducto, cantidad } = req.body;
        await ModeloDetalle.create({
            idpedido: idpedido,
            idproducto: idproducto,
            cantidad: cantidad,
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
exports.modificar = async (req,res) => {
    const validacion = validationResult(req);
    if(!validacion.isEmpty()){
        console.log(validacion.array());
        res.send("Error en los datos enviados.");
    }
    else{
        const {id}=req.query;
        const { idpedido, idproducto, cantidad } = req.body;
        var buscarDetalle = await ModeloDetalle.findOne({
            where:{
                idDetalle: id
            }
        });
        if(!buscarDetalle){
            res.send("El id del detalle de pedido no existe.");
        }
        else{
            buscarDetalle.idpedido=idpedido;
            buscarDetalle.idproducto=idproducto;
            buscarDetalle.cantidad=cantidad;
            await buscarDetalle.save()
            .then((data)=>{
                console.log(data);
                res.send("El registro del detalle de pedido se ha actualizado.");
            })
            .catch((error)=>{
                console.log(error);
                res.send("Error al actualizar registro del detalle.");
            });
        }  
    }
};