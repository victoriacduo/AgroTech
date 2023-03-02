const express = require('express');

const router = express.Router();

const veiculo = require('../controller/veiculo');

router.get('/veiculo/:id', veiculo.read);
router.get('/veiculo', veiculo.readAll);
router.post('/veiculo', veiculo.create);
router.delete('/veiculo/:id', veiculo.del);

module.exports = router;