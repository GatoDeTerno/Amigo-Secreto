//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Arrays
let listaAmigos = [];

let sorteiosAnteriores = [];

//Funções
function adicionarAmigo(){
    let novoAmigo = document.getElementById('amigo').value;

    //Verifica se um nome foi digitado
    //A variável "temLetras" recebe recebe o conjunto de letras
    let temLetras = /[a-zA-Z]/;
    //"letras.test" verifica se a variável testada tem letras dentro dela, se sim retorna True e se não retorna False
    if(temLetras.test(novoAmigo) == false){
        alert('Por favor, insira um nome válido!');
    }

    //Verifica se o nome já não foi colocado
    else if(listaAmigos.includes(novoAmigo)){
        alert('Esse nome já foi adicionado!');
    }
    else{
        console.log(novoAmigo);
        listaAmigos.push(novoAmigo);
        console.log(listaAmigos);

        //exibirTextoNaTela('listaAmigos', listaAmigos);
        //O for vai exibir cada nome colocado um abaixo do outro
        lista = document.getElementById('listaAmigos');
        lista.innerHTML = '';

        for(i = 0; i < listaAmigos.length; i++){
            lista.innerHTML += listaAmigos[i] + '<br>';
        }
    }
    document.getElementById('amigo').value = '';
}


function exibirTextoNaTela(tag, texto){
    campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

function sortearAmigo(){

    //Gera um numero entre 0 e a quantidade de nomes listados -1, cada numero corresponde a posição do nome listado
    let numeroSorteado = parseInt(Math.random() * listaAmigos.length);

    //Verifica se o numero sorteado já foi sorteado anteriormente
    if(sorteiosAnteriores.includes(numeroSorteado)){

        //Verifica se todos os numeros já foram sorteados, Se sim ele reseta a lista de 'sorteiosAnteriores'
        if(sorteiosAnteriores.length == listaAmigos.length){
            sorteiosAnteriores = [];
            console.log('Sorteios anteriores resetados ');
        }
        sortearAmigo();
    }
    else{
        sorteiosAnteriores.push(numeroSorteado);
        console.log(`O amigo sorteado é: ${listaAmigos[numeroSorteado]}`);
        exibirTextoNaTela('resultado', listaAmigos[numeroSorteado]);
    }
}