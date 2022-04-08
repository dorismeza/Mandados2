const express = require('express');
const ehbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const {urlencoded, json} = require('express');
const session = require('express-session');
const MySQLSession = require('express-mysql-session');
const {database} = require('./keys');
const passport = require('passport');
const flash = require('connect-flash');
const toastr = require('express-toastr');

const app = express();
require('./helpers/passport');


app.use(morgan('dev'));
app.use(urlencoded({extended: false}));
app.use(json());

app.use(session({
   secret: 'mandados-session',
   resave: false,
   saveUninitialized: false,
   store: new MySQLSession(database)
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());
app.use(toastr());

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', ehbs({
   defaultLayout: 'app',
   extname: '.hbs',
   helpers: require('./helpers/handlebars')
}));
app.set('view engine', '.hbs');

app.use((req, res, next) => {
   res.locals.usuario = req.user;
   res.locals.toastr = req.toastr.render()
   next();
})

app.use(require('./routes'));
app.use(require('./routes/comentario'));
app.use(require('./routes/usuario'));
app.use(require('./routes/auth'));
app.use(require('./routes/admin'));
app.use(require('./routes/plato'));
app.use(require('./routes/pedido'));
app.use(require('./routes/tiendas'));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000,() => {
   console.log('Servidor Ejecutandose');
});

