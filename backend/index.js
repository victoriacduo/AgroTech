const express = require('express');
const cors = require('cors');

const app = express();

const usuario = require('./src/router/usuarioRouter')
const motorista = require('./src/router/motoristaRouter')
const veiculo = require('./src/router/veiculoRouter')
const servicos = require('./src/router/servicosRouter')
const manutencoes = require('./src/router/manutencaoRouter')

app.use(cors());
app.use(express.json());
app.use(usuario);
app.use(motorista);
app.use(veiculo);
app.use(servicos);
app.use(manutencoes);

app.listen(3000, () => {
    console.log("ok");
})
