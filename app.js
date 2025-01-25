let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo == "") {
        alert ("Por favor, insira um nome.");
    } else {
        amigos.push(nomeAmigo);
        console.log(amigos);
        atualizarLista();
        limparCampos();
    }
}

function limparCampos() {
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = "";
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (const amigo of amigos) {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    }
}

function sortearAmigo() {
        if (amigos.length === 0) {
        alert ("A lista de amigos está vazia!")
    } else {
        let indiceSorteio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceSorteio];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = amigoSorteado;

    }
}


