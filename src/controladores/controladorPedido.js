const modeloPedido = require('../modelos/modeloPedido');
const { validationResult } = require('express-validator');



exports.guardarPedido = async (req, res) =>{
    const {idUsuario, direccion, formapago, codtarjeta, numtarjeta, fechatarjeta, total } = req.body;
    const validacion = validationResult(req);

    if(!validacion.isEmpty){
        res.send("Porfavor revise los datos")
    }else{
        await modeloPedido.create({
            idUsuario: idUsuario,
            direccion: direccion,
            formapago: formapago,
            codtarjeta: codtarjeta,
            numtarjeta: numtarjeta,
            fechatarjeta: fechatarjeta, 
            total: total
        })

        .then((data) => {
            console.log(data.contrasena);
            res.send("Se ha registrado exitosamente");
        })
        .catch((error) => {
            console.log(error);
            res.send("Error al registrarse")
        });
    }
}

exports.modificarPedido = async (req, res) =>{
    
}

exports.cancelarPedido = async (req, res) =>{
    const {idPedido} = req.query;
    const validacion = validationResult(req);
    if(!validacion.isEmpty()){
        res.send("Porfavor revise los datos");
    }else{
        const buscarPedido = await modeloPedido.findOne({
            where: {
                idPedido: idPedido,
                estado: 'AC'
            }
        })
        if(!buscarPedido){
            send.res("El pedido no existe");
        }else{
            buscarPedido.estado = 'C'

            await buscarPedido.save()
            .then((data) => {
                console.log(data.contrasena);
                res.send("Se canceló el pedido");
            })
            .catch((error) => {
                console.log(error);
                res.send("Error al cancelar el pedido")
            });
        }
    }
}

