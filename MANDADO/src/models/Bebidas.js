const db = require('../db');
const Plato = {};

Plato.get = async () => {
    return await db.query(`select * from restaurantes`);
};

Plato.find = async (id) => {
    return await db.query(`select * from platos where id=?`, [id]);
};

module.exports = Plato;