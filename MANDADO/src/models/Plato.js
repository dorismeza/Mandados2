const db = require('../db');
const Plato = {};

Plato.get1 = async () => {
    return await db.query(`select * from productos where idTineda = 1`);
};

Plato.get2 = async () => {
    return await db.query(`select * from productos where idTineda = 2`);
};

Plato.get3 = async () => {
    return await db.query(`select * from productos where idTineda = 3`);
};

Plato.get4 = async () => {
    return await db.query(`select * from productos where idTineda = 4`);
};
Plato.get = async () => {
    return await db.query(`select * from productos`);
};


Plato.find = async (id) => {
    return await db.query(`select * from platos where id=?`, [id]);
};

Plato.create = async (data) => {

    try {
        const insertar = await db.query(`insert into platos set ?`, [data]);
        if (insertar === 'error') {
            console.error('ERROR');
        } else {
            return insertar;
        }
    } catch (e) {
        console.error(e);
        }
};

Plato.update = async (id, data) => {
    try {
        const actualizar = await db.query(`update platos set ? where id=?`, [data, id]);
        if (actualizar === 'error') {
            console.error('ERROR');
        } else {
            return actualizar;
        }
    } catch (e) {
        console.error(e);
    }
};

Plato.delete = async (id) => {
    return await db.query(`delete from platos where id=?`, [id]);
};

module.exports = Plato;