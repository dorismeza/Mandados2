const { Router } = require('express');
const router = Router();
router.get('/', (req, res) => {
    console.log("Ruta Inicial");
    res.send("Ruta Inicial");
});
module.exports= router;