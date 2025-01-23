let amigos = [];

//Adicionando amigos a lista e verificando se o campo está vazio
function adicionarAmigo(){
    let nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo == "") {
        alert('Por favor, insira um nome abaixo!'); 
    } else {
        amigos.push(nomeAmigo);
    }
    console.log(amigos);
    limpaCampo();
}
// função para limpar o campo de input
function limpaCampo(){
    let nomeAmigo = document.getElementById('amigo');
    nomeAmigo.value = "";
}

    