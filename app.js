let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();
    
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    amigos.push(nomeAmigo);
    inputAmigo.value = '';
    atualizarListaAmigos();

}


function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigos[i];
        listaAmigos.appendChild(itemLista);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}`;
    amigos = [];
    atualizarListaAmigos();
}

document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});