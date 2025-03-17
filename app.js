let listaDeNumerosSorteados = [];
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1 ;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirMensagemInicial() {
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 50');
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;


    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1' ,'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa} !`;
        exibirTextoNaTela('p' ,mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p' ,'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é  maior');
        }
        tentativas++;
        limparCampo();
    
}

     }
        function gerarNumeroAleatorio() {
            let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
            let quantidadeDeElementosNalista = listaDeNumerosSorteados.length;

            if (quantidadeDeElementosNalista == numeroLimite) {
                listaDeNumerosSorteados = [];
            }
           if (listaDeNumerosSorteados.includes (numeroEscolhido)) {
                return gerarNumeroAleatorio(); 
            } else {
             listaDeNumerosSorteados.push(numeroEscolhido);
             console.log(listaDeNumerosSorteados);
                return numeroEscolhido;
            }

            }
        

    function limparCampo() {
       let chute = document.querySelector('input');
        chute.value = '';
    }

    function ReiniciarJogo() {
       let numeroSecreto = gerarNumeroAleatorio();
       limparCampo();
        tentativas = 1;
        exibirMensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled' , true);
    }
        