const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');
const app = express();
app.set('port', process.env.port || 3001);
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.use('/app/public',express.static(path.join(__dirname, 'public/img')));

app.use('/app', require('./rutas/index'));
app.use('/app/usuarios/', require('./rutas/routeUsuario'));
app.use('/app/pedido', require('./rutas/rutaPedido'));
app.use('/app/tienda/', require('./rutas/rutasTienda')); 
app.use('/app/detalle/', require('./rutas/rutasDetalle'));
app.use('/app/productos/', require('./rutas/rutasProductos'));
app.use('/app/categorias/', require('./rutas/rutasCategorias'));
app.listen(app.get('port'), ()=> {
    console.log('Sevidor iniciado en el puerto 3001');
});