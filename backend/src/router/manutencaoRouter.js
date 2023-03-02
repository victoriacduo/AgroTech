const express = require('express');
const router = express.Router();

const manutencoes = require('../controller/manutencoes');

router.get('/manutencoes/:id', manutencoes.read);
router.get('/manutencoes', manutencoes.readAll);
router.post('/manutencoes', manutencoes.create);
router.delete('/manutencoes', manutencoes.del);

module.exports = router;