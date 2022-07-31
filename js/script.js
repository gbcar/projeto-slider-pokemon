// recupera o elemento html da seta voltar
const btnVoltar = document.getElementById("btn-voltar");

// recupera o elemento html da seta avançar
const btnAvancar = document.getElementById("btn-avancar");

// recupera todos os elementos com estilo cartao
const cartoes = document.querySelectorAll(".cartao");

let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado");
}

// identifica o evento de clique na seta voltar
btnVoltar.addEventListener("click", function (){
    if (cartaoAtual === 0)
        return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
})

// identifica o evento de clique na seta avançar
btnAvancar.addEventListener("click", function (){
    if (cartaoAtual === cartoes.length - 1)
        return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);
})

