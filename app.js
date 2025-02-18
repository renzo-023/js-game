let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto) {
  let titulo = document.querySelector(tag);
  titulo.innerHTML = texto;
  // responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10:");
}

function desabilitarNovoJogo() {
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

exibirMensagemInicial();

let foto = document.querySelector("img");

function limpar() {
  foto.id = "";
  foto.src = "./img/brendox.png";
  foto.style.display = "";
}

function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute == "23032024") {
    alert("código secreto ativado!");
    exibirTextoNaTela("h1", "EU TE AMO AMANDA <3");
    foto.src = "./img/nos.jpg";
    foto.id = "container__imagem-nos";
    limparCampo();
  } else {
    if (chute == numeroSecreto) {
      exibirTextoNaTela("h1", "Acertou!");
      let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
      let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
      exibirTextoNaTela("p", mensagemTentativas);
      document.getElementById("reiniciar").removeAttribute("disabled");
      foto.style.display = "none";
    } else {
      if (chute > numeroSecreto) {
        exibirTextoNaTela("p", "Você errou! Tente um número menor!");
      } else {
        exibirTextoNaTela("p", "Você errou! Tente um número maior!");
      }
      tentativas++;
      limparCampo();
    }
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  desabilitarNovoJogo();
  limpar();
}
