const express = require('express');
const router = express.Router();

//Rutas

router.get('/', (requestAnimationFrame, res) => {
    res.send('Bienvenidos a la API');
});

module.exports = router;    