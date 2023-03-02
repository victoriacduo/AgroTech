const express = require('express');
const middle = require('../middleware/middleware')
const router = express.Router();

const usuario = require('../controller/usuario');

router.get('/usuario/:id', usuario.read);
router.post('/usuario/login', usuario.login);
router.post('/usuario', middle.validaAcesso, usuario.create);

module.exports = router;