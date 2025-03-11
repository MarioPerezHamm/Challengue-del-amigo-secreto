// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación .
let amigos= [];

function agregarAmigo (){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if(!nombreAmigo) {
        alert('Por favor, ingrese un nombre de amigo.');
        return;
    }
    // Alerta para que no se duplique el nombre de amigo 
    if (amigos.includes(nombreAmigo)) {
        alert('Este amigo ya está en la lista.');
        return;
    }
    amigos.push(nombreAmigo);
    inputAmigo.value = '';
    inputAmigo.focus();
    renderizarAmigos();
}

function renderizarAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for(let i = 0 ; i < amigos.length; i++){
        let item = document.createElement('li');
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}
    function sortearAmigos(){
        if(amigos.length == 0){
            alert('no hay amigos para sortear');
            return;
        }

        // si solo se ecnuentra un amigo en la lista 
        if (amigos.length == 1){
            alert('Solo hay un amigo, no es necesario sortear.');
            return;
        }

        let amigoSorteado = amigos [Math.floor(Math.random()* amigos.length)];
        console.log(amigoSorteado);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = amigoSorteado ;


    }
