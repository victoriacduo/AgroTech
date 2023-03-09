const express = require('express');
const router = express.Router();

const servicos = require('../controller/servicos');

router.get('/servicos/:id', servicos.read);
router.get('/servicos', servicos.readAll);
router.post('/servicos', servicos.create);
router.delete('/servicos/:id', servicos.del);

module.exports = router;