const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.set('port', process.env.port || 3001);
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/app', require('./rutas/index'));
app.use('/app/tipos', require('./rutas/rutasTipos'));
app.use('/api/usuarios/', require('./rutas/routeUsuario'));
app.use('/api/pedido', require('./rutas/rutaPedido'));
app.use('/api/tienda/', require('./rutas/rutasTienda')); 
app.use('/api/detalle/', require('./rutas/rutasDetalle'));
app.use('/api/productos/', require('./rutas/rutasProductos'));
app.use('/api/categorias/', require('./rutas/rutasCategorias'));
app.listen(app.get('port'), ()=> {
    console.log('Sevidor iniciado en el puerto 3001');
});