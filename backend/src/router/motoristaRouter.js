const express = require('express');

const router = express.Router();

const motorista = require('../controller/motorista');

router.get('/motorista/:id', motorista.read);
router.get('/motorista', motorista.readAll);
router.post('/motorista', motorista.create);
router.delete('/motorista/:id', motorista.del);

module.exports = router;