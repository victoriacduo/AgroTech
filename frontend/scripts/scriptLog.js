const inpEmail = document.getElementById('email');
const inpPassword = document.getElementById('senha');
const btn = document.getElementById('botaoLogin');

const enter = (e) => {
    if (e.keyCode === 13) {
        logar();
    }
}

const logar = () => {
    let usuario = {
        "email": inpEmail.value,
        "senha": inpPassword.value
    }

    fetch('http://localhost:3000/usuario/login', {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }).then(response => { return response.json() })
        .then(info => {
            console.log(info);
            if (info.nome != undefined) {
                window.localStorage.setItem('usuario', JSON.stringify(info));
                window.location.href = '../pages/home.html';
            } else {
                alert('Erro ao logar, email ou senha incorreta!');
                window.location.reload();
            }
        })
}