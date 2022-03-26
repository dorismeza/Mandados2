const ModeloProducto = require('../modelos/modeloProductos');

exports.inicio= async (req,res)=>{
    res.send("Hola estas en el inicio de personas");
};

//Mostrar
exports.listarproductos = async (req,res)=>{
    const listaProductos = await ModeloProducto.findAll();
    if(listaProductos.length==0){
        res.send("No existen productos en la base");
    }
    else{
        res.json(listaProductos);
    }
};

exports.listarXTiendas = async (req, res) => {
    const { id } = req.query;
    if(!id){
        console.log("Ingrese el id de la tienda");
        res.send("Ingrese el id de la tienda");
    }
    else{
        var buscarProducto = await ModeloProducto.findAll({
            where: {
                idtienda: id
            }
        });
        if (!buscarProducto) {
            res.send("El id de la tienda no existe.");
        }
        else {
            res.json(buscarProducto);
        }
    }
};

//guardar
exports.guardar = async (req,res)=>{
    const {nombreProducto , precioProducto,cantidad, estado,imagen,idtienda} = req.body;
    if(!nombreProducto || !precioProducto || !cantidad || !imagen || !idtienda){
        res.send("Debe enviar los datos obligatorios");
    }
    else{
        await ModeloProducto.create({
            nombreProducto:nombreProducto,
            precioProducto:precioProducto,
            cantidad:cantidad,
            imagen:imagen,
            idtienda:idtienda,
        })
        .then((data)=>{
            console.log(data.nombreProducto);
            res.send("Registro almacenado");
        })
        .catch((error)=>{
            console.log(error);
            res.send("Error al guardar los datos");
        });
    }
  
};


exports.modificar = async (req,res)=>{
    const {idproductos} = req.query;
    const {nombreProducto, precioProducto,cantidad, estado,imagen,idtienda} = req.body

    if(!idproductos || !nombreProducto || !precioProducto || !cantidad || !imagen || !idtienda){
        res.send("Envie los datos completos");
    }
    else{
        var buscarProducto = await ModeloProducto.findOne({
            where:{
                idproductos: idproductos,
                estado: 'DISPONIBLE',
            }
        });
        if(!buscarProducto){
            res.send("El producto no existe o no se encuentra disponible");
        }
        else{
            buscarProducto.nombreProducto = nombreProducto;
            buscarProducto.precioProducto = precioProducto;
            buscarProducto.cantidad = cantidad;
            buscarProducto.imagen = imagen;
            buscarProducto.idtienda = idtienda;
            await buscarProducto.save()
            .then((data)=>{
                console.log(data);
                res.send("Producto actualizado");
            })
            .catch((error)=>{
                console.log(error);
                res.send("Error al modificar el producto");
            });
            
        }
       // console.log(buscarProducto)
    }
};

exports.eliminar = async (req,res)=>{
    const {idproductos} = req.query;
    if(!idproductos){
        res.send("Envie los datos completos");
    }
    else{
        var buscarProducto = await ModeloProducto.findOne({
            where:{
                idproductos: idproductos,
                estado: 'DISPONIBLE',
            }
        });
        if(!buscarProducto){
            res.send("El producto no existe o no se encuentra disponible");
        }
        else{

            buscarProducto.estado = 'AGOTADO';
            await buscarProducto.save()
            .then((data)=>{
                console.log(data);
                res.send("Producto actualizado");
            })
            .catch((error)=>{
                console.log(error);
                res.send("Error al modificar el producto");
            });
            
        }
    }
    };


    exports.Recibirp = async (req, res) => {
        const{ filename } = req.file;
        const {idproductos} = req.query;
        console.log(idproductos);
        var BuscarProducto = await ModeloProducto.findOne({
            where:{
                idproductos : idproductos
            }
        });
        if(!BuscarProducto){
            msj('El producto no existe', 200,[], res);
        }
        else{
            try{
                const buscarImagen = fs.existsSync(path.join(__dirname, '../public/img/'+ BuscarProducto.imagen));
                if(!buscarImagen){
                    console.log('La imagen no existe');
                }
                else{
                    try {
                        fs.unlinkSync(path.join(__dirname, '../public/img/'+ BuscarProducto.imagen));
                        console.log('Imagen eliminada');
                    } catch (error) {
                        console.log('Error al eliminar la imagen'+ error);
                    }
                }
            }
            catch(error){
                console.log(error);
            }
            BuscarProducto.imagen = filename;
            await buscarImagen.save()
            .then((data)=>{
                msj('Archivo Almacenado');
            })
            .catch((error)=>{
                msj('Error',200,error,res);
            });
        }
    };

    