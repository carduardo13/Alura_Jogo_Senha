let listaNumeros = [];
let numeroLimite = 10;
let numeroSecreto =  gerarnumeroAleatorio();
let tentativas = 1;
function exibeTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial(){
    exibeTexto('h1', 'Jogo do Numero Secreto');
    exibeTexto('p', 'Escolha um numero entre 1 e 10');
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibeTexto('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibeTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numeroSecreto) {
            exibeTexto('h1', 'Errrrrooouuu');
            exibeTexto('p', `O numero secreto é menor que ${chute}`); 
            limparCampo()
        }else{
            exibeTexto('h1', 'Errrrrooouuu');
            exibeTexto('p', `O numero secreto é maior que ${chute}`); 
            limparCampo()
        }
        tentativas ++;
    }
}

function gerarnumeroAleatorio() {
   let numeroEscolhido = Math.round(Math.random() * numeroLimite + 1);
   let quantidadeElementosLista = listaNumeros.length;

    if(quantidadeElementosLista == numeroLimite) {
        listaNumeros = [];
    }

   if(listaNumeros.includes(numeroEscolhido)){
        return gerarnumeroAleatorio(); 
   }else{
        listaNumeros.push(numeroEscolhido);
        console.log(listaNumeros);
        return numeroEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarnumeroAleatorio();
    limparCampo(); 
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

