const AppController = {};

AppController.index = (req, res) => {
    res.render('wellcome');
}

AppController.comments = (req, res) => {
    res.render('comment');
}

AppController.login = (req, res) => {
    res.render('login');
}

AppController.comidas = (req, res) => {
    res.render('tiendas/Comidas');
}

AppController.bebidas = (req, res) => {
    res.render('tiendas/Bebidas');
}

AppController.postres = (req, res) => {
    res.render('tiendas/Postres');
}

AppController.platos = (req, res) => {
    res.render('plato/plato-index');
}
AppController.pedidos = (req, res) => {
    res.render('fact');
}

module.exports = AppController;