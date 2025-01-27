let amigos = [];
// let lista = [];

//Adicionando amigos a lista e verificando se o campo está vazio
function adicionarAmigo(){
    let nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo == "") {
        alert('Por favor, insira um nome abaixo!'); 
    } else {
        amigos.push(nomeAmigo);
    }
    criandoLista()
    console.log(amigos);
    limpaCampo();
}
// função para limpar o campo de input
function limpaCampo(){
    let nomeAmigo = document.getElementById('amigo');
    nomeAmigo.value = "";
}

//função para criar listas

function criandoLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for(i = 0; i <amigos.length; i++){
        let novoAmigo = document.createElement('li');
        novoAmigo.textContent = amigos[i];
        lista.appendChild(novoAmigo);
        
    }
}

// função para sortear um novo amigo aleatório
function sortearAmigo() {
    if(amigos.length == 0){
        alert('Adicione amigos para participar!');
    } else {
        let amigoAleatorio = Math.floor(Math.random() * amigos.length);
        let resultadoAmigo = document.getElementById('resultado');
        resultadoAmigo.innerHTML = `Seu amigo secreto é ${amigos[amigoAleatorio]}`;
        
        
    }
    recomecar();
}

//função para recomeçar a lista
function recomecar(){
    amigos = [];
    document.getElementById('amigo').value = '';
    // lista.innerHTML = '';
    // lista.value = '';
    resultadoAmigo = '';

}
    