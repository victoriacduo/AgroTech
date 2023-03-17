function qntdVei(qntd) {
    console.log(qntd);
    var ctx = document.querySelector('#qntdVei').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Visita", "Venda", "Carga"],
            datasets: [{
                data: [qntd[0], qntd[1], qntd[2]],
                borderWidth: 1,
                spacing: 5,
                hoverOffset: 5
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function usoVei() {
    var ctx = document.querySelector('#usoVei').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Visita", "Venda", "Carga"],
            datasets: [{
                data: [12,3 ,4],
                borderWidth: 1,
                spacing: 5,
                hoverOffset: 5
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function veiOp(e) {
    console.log(e)
    var ctx = document.querySelector('#veiOp').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Visita", "Venda", "Carga"],
            datasets: [{
                data: [e],
                borderWidth: 1,
                spacing: 5,
                hoverOffset: 5
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function motOp() {
    var ctx = document.querySelector('#motOp').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Visita", "Venda", "Carga"],
            datasets: [{
                data: [12, 3 ,4],
                borderWidth: 1,
                spacing: 5,
                hoverOffset: 5
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function veiOp(e) {
    var ctx = document.querySelector('#veiOp').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Veiculos"],
            datasets: [{
                data: [e],
                borderWidth: 1,
                spacing: 5,
                hoverOffset: 5
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function veiManu(e) {
    var ctx = document.querySelector('#veiManu').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Veiculos"],
            datasets: [{
                data: [e],
                borderWidth: 1,
                spacing: 5,
                hoverOffset: 5
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function manuMes() {
    var ctx = document.querySelector('#manuMes').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Visita", "Venda", "Carga"],
            datasets: [{
                data: [12, 3 ,4],
                borderWidth: 1,
                spacing: 5,
                hoverOffset: 5
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function gerarGraficoVeiculo() {
    const data = {
        labels: ["Janeiro","Fevereiro","Marco","Abril","Maio","Junho","Julho","Agosto","Septembro","Outubro","Novembro","Dezembro"],
        datasets: [
            {
                label: "Veiculos",
                data: [12,12,12,10,0,0,0,0,0,0,10,10],
                borderWidth: 1
            }
        ]
    };

    const myChart = new Chart(document.querySelector("#veiUsoMes"), {
        type: "bar",
        data: data,
        options: {}
    });
}

function gerarGraficoManu() {
    const data = {
        labels: ["Janeiro","Fevereiro","Marco","Abril","Maio","Junho","Julho","Agosto","Septembro","Outubro","Novembro","Dezembro"],
        datasets: [
            {
                label: "Veiculos",
                data: [12,12,12,0,0,0,0,0,0,0,0,10],
                borderWidth: 1
            }
        ]
    };

    const myChart = new Chart(document.querySelector("#reManuMes"), {
        type: "bar",
        data: data,
        options: {}
    });
}

function gerarGraficoOp() {
    const data = {
        labels: ["Janeiro","Fevereiro","Marco","Abril","Maio","Junho","Julho","Agosto","Septembro","Outubro","Novembro","Dezembro"],
        datasets: [
            {
                label: "Veiculos",
                data: [12,12,12,0,0,0,0,0,0,0,0,10],
                borderWidth: 1
            }
        ]
    };

    const myChart = new Chart(document.querySelector("#opMes"), {
        type: "bar",
        data: data,
        options: {}
    });
}

var motoristas = [];
var veiculos = [];
var servicos = [];
var manutencoes = [];

function loadAll() {
    fetch('http://localhost:3000/motorista')
        .then((resp) => { return resp.json() })
        .then(resp => {
            console.log(resp);
            motoristas = resp;
            
        })

    fetch('http://localhost:3000/veiculo')
        .then((resp) => { return resp.json() })
        .then(resp => {
            veiculos = resp;
            var qntd = [0,0,0]
            resp.forEach(et => {
                if (et.servico == "visita") {
                    qntd[0]++
                } else if (et.servico == "carga") {
                    qntd[1]++
                } else {
                    qntd[2]++
                }
            });
            qntdVei(qntd)
        })

    fetch('http://localhost:3000/servicos')
        .then((resp) => { return resp.json() })
        .then(resp => {
            servicos = resp;
            console.log(resp);
            veiOp(resp.length)
        })

    fetch('http://localhost:3000/manutencoes')
        .then((resp) => { return resp.json() })
        .then(resp => {
            manutencoes = resp;
            console.log(resp);
            veiManu(resp.length)
        })
}

setTimeout(() => {
    usoVei()
    motOp()
    manuMes()
    gerarGraficoVeiculo()
    gerarGraficoOp()
    gerarGraficoManu()
    loadAll()
}, 1000)