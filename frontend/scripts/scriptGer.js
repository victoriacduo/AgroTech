let motoName = document.querySelector("#motoName");
let motoCpf = document.querySelector("#motoCpf");
let motoCnh = document.querySelector("#motoCnh");

let veiModelo = document.querySelector("#veiModelo");
let veiMarca = document.querySelector("#veiMarca");
let veiServ = document.querySelector("#veiServ");
let veiPlaca = document.querySelector("#veiPlaca");

let servIdMoto = document.querySelector("#servIdMoto");
let servSaida = document.querySelector("#servSaida");
let servRetorno = document.querySelector("#servRetorno");
let servDescricao = document.querySelector("#servDescricao");

let manuInicio = document.querySelector("#manuInicio");
let manuFim = document.querySelector("#manuFim");
let manuValor = document.querySelector("#manuValor");
let manuDesc = document.querySelector("#manuDesc");
let manuIdVei = document.querySelector("#manuIdVei");

var motoristas = [];
var veiculos = [];
var servicos = [];
var manutencoes = [];

function pagRel() {
    window.location.href = '../html/comum.html';
}

function loadAll() {
    fetch('http://localhost:3000/motorista')
        .then((resp) => { return resp.json() })
        .then(resp => {
            motoristas = resp;
            renderMotorista();
        })

    fetch('http://localhost:3000/veiculo')
        .then((resp) => { return resp.json() })
        .then(resp => {
            veiculos = resp;
            renderVeiculo();
        })

    fetch('http://localhost:3000/servicos')
        .then((resp) => { return resp.json() })
        .then(resp => {
            servicos = resp;
            renderServicos();
        })

    fetch('http://localhost:3000/manutencoes')
        .then((resp) => { return resp.json() })
        .then(resp => {
            manutencoes = resp;
            renderManutencoes();
        })
}

function renderMotorista() {
    motoristas.forEach(motorista => {
        let moto = document.querySelector("#linhaMoto");
        let novoMoto = moto.cloneNode(true);
        novoMoto.classList.remove("model");

        let id = novoMoto.querySelector("#idMoto");
        let nome = novoMoto.querySelector("#nomeMoto");
        let cpf = novoMoto.querySelector("#cpfMoto");
        let cnh = novoMoto.querySelector("#cnhMoto");
        let edit = novoMoto.querySelector("#edit");
        id.innerHTML += motorista.id;
        nome.innerHTML += motorista.nome;
        cpf.innerHTML += motorista.cpf;
        cnh.innerHTML += motorista.cnh;
        edit.innerHTML = `<button id="delMoto" onclick="fetchDelMoto(${motorista.id})"><img src="../assets/delete.png"
        width="25" height="25"></button>`

        document.querySelector("#contentMoto").appendChild(novoMoto);
    });
}

function renderVeiculo() {
    veiculos.forEach(veiculo => {
        let veiculozinho = document.querySelector("#linhaVei");
        let novoVeiculo = veiculozinho.cloneNode(true);
        novoVeiculo.classList.remove("model");

        let id = novoVeiculo.querySelector("#idVei");
        let modelo = novoVeiculo.querySelector("#modelo");
        let marca = novoVeiculo.querySelector("#marca");
        let servico = novoVeiculo.querySelector("#servs");
        let placa = novoVeiculo.querySelector("#placa");
        let edit = novoVeiculo.querySelector("#edit");
        id.innerHTML += veiculo.id;
        modelo.innerHTML += veiculo.modelo;
        marca.innerHTML += veiculo.marca;
        servico.innerHTML += veiculo.servico;
        placa.innerHTML += veiculo.placa;
        edit.innerHTML = `<button id="delVei" onclick="fetchDelVei(${veiculo.id})"><img src="../assets/delete.png"
        width="25" height="25"></button>`

        document.querySelector("#contentVei").appendChild(novoVeiculo);
    })
}

function renderServicos() {
    servicos.forEach(servico => {
        let servicinho = document.querySelector("#linhaServ");
        let novoServico = servicinho.cloneNode(true);
        novoServico.classList.remove("model");

        let id = novoServico.querySelector("#idServ");
        let idMotoServ = novoServico.querySelector("#idMotoServ");
        let dataSaida = novoServico.querySelector("#dataSaida");
        let dataRetorno = novoServico.querySelector("#dataRetorno");
        let descricao = novoServico.querySelector("#descricao");
        let edit = novoServico.querySelector("#edit");
        id.innerHTML += servico.id;
        idMotoServ.innerHTML += servico.id_moto;
        dataSaida.innerHTML += servico.data_saida;
        dataRetorno.innerHTML += servico.data_retorno;
        descricao.innerHTML += servico.descricao;
        edit.innerHTML = `<button id="delServ" onclick="fetchDelServ(${servico.id})"><img src="../assets/delete.png"
        width="25" height="25"></button>`

        document.querySelector("#contentServ").appendChild(novoServico);
    })
}

function renderManutencoes() {
    manutencoes.forEach(manutencao => {
        let manu = document.querySelector("#linhaManu");
        let novaManu = manu.cloneNode(true);
        novaManu.classList.remove("model");

        let id = novaManu.querySelector("#idManu");
        let inicio = novaManu.querySelector("#inicio");
        let fim = novaManu.querySelector("#fim");
        let valor = novaManu.querySelector("#valor");
        let descricao = novaManu.querySelector("#descricao");
        let idVeiculo = novaManu.querySelector("#idVeiculo");
        let edit = novaManu.querySelector("#edit");
        id.innerHTML += manutencao.id;
        inicio.innerHTML += manutencao.data_inicio;
        fim.innerHTML += manutencao.data_fim;
        valor.innerHTML += manutencao.valor;
        descricao.innerHTML += manutencao.descricao;
        idVeiculo.innerHTML += manutencao.id_veiculo;
        edit.innerHTML = `<button id="delManu" onclick="fetchDelManu(${manutencao.id})"><img src="../assets/delete.png"
        width="25" height="25"></button>`

        document.querySelector("#contentManu").appendChild(novaManu);
    })
}

function fetchCadMoto() {
    let cadastro = {
        "nome": motoName.value,
        "cpf": motoCpf.value,
        "cnh": motoCnh.value
    }

    fetch('http://localhost:3000/motorista', {
        "method": "POST",
        "headers": {
            "content-type": "application/json"
        },
        "body": JSON.stringify(cadastro)
    }).then(res => { return res.json() })
        .then(resp => {
            if (resp != undefined) {
                window.location.reload();
            } else {
                console.log("n ok");
            }
        });
}

function fetchCadVei() {
    let cadastro = {
        "modelo": veiModelo.value,
        "marca": veiMarca.value,
        "servico": veiServ.value,
        "placa": veiPlaca.value
    }

    fetch('http://localhost:3000/veiculo', {
        "method": "POST",
        "headers": {
            "content-type": "application/json"
        },
        "body": JSON.stringify(cadastro)
    }).then(res => { return res.json() })
        .then(resp => {
            if (resp != undefined) {
                window.location.reload();
            } else {
                console.log("n ok");
            }
        });
}

function fetchCadServ() {
    let cadastro = {
        "id_moto": parseInt(servIdMoto.value),
        "data_saida": servSaida.value,
        //"data_retorno": servRetorno.value,
        "descricao": servDescricao.value
    }

    console.log(cadastro)

    fetch('http://localhost:3000/servicos', {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(cadastro)
    }).then(res => { return res.json() })
        .then(resp => {
            if (resp != undefined) {
                window.location.reload();
            } else {
                console.log("n ok");
            }
        });
}

function fetchCadManu() {
    let cadastro = {
        "data_inicio": manuInicio.value,
        "data_fim": manuFim.value,
        "valor": parseFloat(manuValor.value),
        "descricao": manuDesc.value,
        "id_veiculo": parseInt(manuIdVei.value)
    }

    console.log(cadastro)

    fetch('http://localhost:3000/manutencoes', {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(cadastro)
    }).then(res => { return res.json() })
        .then(resp => {
            if (resp != undefined) {
                window.location.reload();
            } else {
                console.log("n ok");
            }
        });
}

function fetchDelMoto(id) {
    fetch(`http://localhost:3000/motorista/${id}`, {
        "method": "DELETE",
        "headers": {
            "content-type": "application/json"
        }
    }).then(window.location.reload())
}

function fetchDelVeiculo(id) {
    fetch(`http://localhost:3000/veiculo/${id}`, {
        "method": "DELETE",
        "headers": {
            "content-type": "application/json"
        }
    }).then(window.location.reload())
}

function fetchDelServ(id) {
    fetch(`http://localhost:3000/servicos/${id}`, {
        "method": "DELETE",
        "headers": {
            "content-type": "application/json"
        }
    }).then(window.location.reload())
}

function fetchDelManu(id) {
    fetch(`http://localhost:3000/manutencoes/${id}`, {
        "method": "DELETE",
        "headers": {
            "content-type": "application/json"
        }
    }).then(window.location.reload())
}


// modais

function modalCadMoto() {
    document.querySelector(".modalMoto").classList.toggle("model");
}

function modalCadVei() {
    document.querySelector(".modalVei").classList.toggle("model");
}

function modalCadServ() {
    document.querySelector(".modalServ").classList.toggle("model");
}

function modalCadManu() {
    document.querySelector(".modalManu").classList.toggle("model");
}

function abrirModalMoto() {
    document.querySelector(".motorista-modal").classList.remove("model");
    document.querySelector(".veiculo-modal").classList.add("model");
    document.querySelector(".servicos-modal").classList.add("model");
    document.querySelector(".manutencoes-modal").classList.add("model");
}

function abrirModalVei() {
    document.querySelector(".veiculo-modal").classList.remove("model");
    document.querySelector(".motorista-modal").classList.add("model");
    document.querySelector(".servicos-modal").classList.add("model");
    document.querySelector(".manutencoes-modal").classList.add("model");
}

function abrirModalSer() {
    document.querySelector(".servicos-modal").classList.remove("model");
    document.querySelector(".motorista-modal").classList.add("model");
    document.querySelector(".veiculo-modal").classList.add("model");
    document.querySelector(".manutencoes-modal").classList.add("model");
}

function abrirModalManu() {
    document.querySelector(".manutencoes-modal").classList.remove("model");
    document.querySelector(".motorista-modal").classList.add("model");
    document.querySelector(".servicos-modal").classList.add("model");
    document.querySelector(".veiculo-modal").classList.add("model");
}