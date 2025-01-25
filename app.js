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
        const item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    }
}


