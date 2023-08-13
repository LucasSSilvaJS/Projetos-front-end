//todos os produtos
//Hamburguer
//Acai
//Frango
//Coxinha
//Croissant
//Esfirra
//Milkshake
//Sanduiche
//Bolinho

//quantidade hamburguer
var outQuantidadeHamburguer = document.getElementById('outQuantidadeHamburguer');
var quantidadeHamburguer = Number(outQuantidadeHamburguer.value);

//quantidade Acai
var outQuantidadeAcai = document.getElementById('outQuantidadeAcai');
var quantidadeAcai = Number(outQuantidadeAcai.value);

//quantidade Frango
var outQuantidadeFrango = document.getElementById('outQuantidadeFrango');
var quantidadeFrango = Number(outQuantidadeFrango.value);

//quantidade Coxinha
var outQuantidadeCoxinha = document.getElementById('outQuantidadeCoxinha');
var quantidadeCoxinha = Number(outQuantidadeCoxinha.value);

//quantidade Croissant
var outQuantidadeCroissant = document.getElementById('outQuantidadeCroissant');
var quantidadeCroissant = Number(outQuantidadeCroissant.value);

//quantidade Esfirra
var outQuantidadeEsfirra = document.getElementById('outQuantidadeEsfirra');
var quantidadeEsfirra = Number(outQuantidadeEsfirra.value);

//quantidade Milkshake
var outQuantidadeMilkshake = document.getElementById('outQuantidadeMilkshake');
var quantidadeMilkshake = Number(outQuantidadeMilkshake.value);

//quantidade Sanduiche
var outQuantidadeSanduiche = document.getElementById('outQuantidadeSanduiche');
var quantidadeSanduiche = Number(outQuantidadeSanduiche.value);

//quantidade Bolinho
var outQuantidadeBolinho = document.getElementById('outQuantidadeBolinho');
var quantidadeBolinho = Number(outQuantidadeBolinho.value);

//quantidade geral
quantidadeAcai = 0;
quantidadeBolinho = 0;
quantidadeCoxinha = 0;
quantidadeCroissant = 0;
quantidadeEsfirra = 0;
quantidadeFrango = 0;
quantidadeHamburguer = 0;
quantidadeMilkshake = 0;
quantidadeSanduiche = 0;

//preço hamburguer
const precoHamburguer = 16;

//preço Acai
const precoAcai = 8;

//preço Frango
const precoFrango = 20;

//preço Coxinha
const precoCoxinha = 3;

//preço Croissant
const precoCroissant = 5;

//preço Esfirra
const precoEsfirra = 2;

//preço Milkshake
const precoMilkshake = 10;

//preço Sanduiche
const precoSanduiche = 18;

//preço Bolinho
const precoBolinho = 2;

listarProdutos();

function listarProdutos(){
    document.getElementById('btHamburguer').addEventListener('click', seletorHamburguer);
    document.getElementById('btAcai').addEventListener('click', seletorAcai);
    document.getElementById('btFrango').addEventListener('click', seletorFrango);
    document.getElementById('btCoxinha').addEventListener('click', seletorCoxinha);
    document.getElementById('btCroissant').addEventListener('click', seletorCroissant);
    document.getElementById('btEsfirra').addEventListener('click', seletorEsfirra);
    document.getElementById('btMilkshake').addEventListener('click', seletorMilkshake);
    document.getElementById('btSanduiche').addEventListener('click', seletorSanduiche);
    document.getElementById('btBolinho').addEventListener('click', seletorBolinho);
    
    

    //Aside function Hamburguer
    document.getElementById('btAumentarHamburguer').addEventListener('click', adicionarHamburguer);
    document.getElementById('btDiminuirHamburguer').addEventListener('click', removerHamburguer);
    document.getElementById('btRemoverHamburguer').addEventListener('click', cancelarHamburguer);
    
    //Aside function Acai
    document.getElementById('btAumentarAcai').addEventListener('click', adicionarAcai);
    document.getElementById('btDiminuirAcai').addEventListener('click', removerAcai);
    document.getElementById('btRemoverAcai').addEventListener('click', cancelarAcai);
    
    //Aside function Frango
    document.getElementById('btAumentarFrango').addEventListener('click', adicionarFrango);
    document.getElementById('btDiminuirFrango').addEventListener('click', removerFrango);
    document.getElementById('btRemoverFrango').addEventListener('click', cancelarFrango);
    
    //Aside function Coxinha
    document.getElementById('btAumentarCoxinha').addEventListener('click', adicionarCoxinha);
    document.getElementById('btDiminuirCoxinha').addEventListener('click', removerCoxinha);
    document.getElementById('btRemoverCoxinha').addEventListener('click', cancelarCoxinha);
    
    //Aside function Croissant
    document.getElementById('btAumentarCroissant').addEventListener('click', adicionarCroissant);
    document.getElementById('btDiminuirCroissant').addEventListener('click', removerCroissant);
    document.getElementById('btRemoverCroissant').addEventListener('click', cancelarCroissant);
    
    //Aside function Esfirra
    document.getElementById('btAumentarEsfirra').addEventListener('click', adicionarEsfirra);
    document.getElementById('btDiminuirEsfirra').addEventListener('click', removerEsfirra);
    document.getElementById('btRemoverEsfirra').addEventListener('click', cancelarEsfirra);
    
    //Aside function Milkshake
    document.getElementById('btAumentarMilkshake').addEventListener('click', adicionarMilkshake);
    document.getElementById('btDiminuirMilkshake').addEventListener('click', removerMilkshake);
    document.getElementById('btRemoverMilkshake').addEventListener('click', cancelarMilkshake);
    
    //Aside function Sanduiche
    document.getElementById('btAumentarSanduiche').addEventListener('click', adicionarSanduiche);
    document.getElementById('btDiminuirSanduiche').addEventListener('click', removerSanduiche);
    document.getElementById('btRemoverSanduiche').addEventListener('click', cancelarSanduiche);
   
    //Aside function Bolinho
    document.getElementById('btAumentarBolinho').addEventListener('click', adicionarBolinho);
    document.getElementById('btDiminuirBolinho').addEventListener('click', removerBolinho);
    document.getElementById('btRemoverBolinho').addEventListener('click', cancelarBolinho);

    document.getElementById('outTotal').style.display = 'none';
    document.getElementById('finalizar-pedido').classList.add('visually-hidden');
}

function atualizarTotal() {
    var totalItens = quantidadeAcai + quantidadeBolinho + quantidadeCoxinha + quantidadeCroissant + quantidadeEsfirra + quantidadeFrango + quantidadeHamburguer + quantidadeMilkshake + quantidadeSanduiche;
    var totalPreco = (precoAcai * quantidadeAcai) + (precoBolinho * quantidadeBolinho) + (precoCoxinha * quantidadeCoxinha) + (precoCroissant * quantidadeCroissant) + (precoEsfirra * quantidadeEsfirra) + (precoFrango * quantidadeFrango) + (precoHamburguer * quantidadeHamburguer) + (precoMilkshake * quantidadeMilkshake) + (precoSanduiche * quantidadeSanduiche);
  
    // Atualiza os elementos no HTML que mostram o total
    document.getElementById('outQuantidadeTotalItens').innerHTML = 'Total itens: ' + totalItens;
    document.getElementById('outValorTotalItens').innerHTML = 'Preço Total R$:' + totalPreco.toFixed(2);
  }

//todos os produtos
//Hamburguer
//Acai
//Frango
//Coxinha
//Croissant
//Esfirra
//Milkshake
//Sanduiche
//Bolinho

//funções Hamburguer

function adicionarHamburguer(){
    var itemHamburguer = document.getElementById('itemHamburguer');
    itemHamburguer.style.display = 'block';

    quantidadeHamburguer++;
    outQuantidadeHamburguer.innerHTML = quantidadeHamburguer;

    var precoTotalHamburguer = precoHamburguer * quantidadeHamburguer;

    var outHamburguerPreco = document.getElementById('outHamburguerPreco');
    outHamburguerPreco.innerHTML = 'Preço R$:' + precoTotalHamburguer.toFixed(2);

    if(quantidadeAcai > 0 || quantidadeBolinho > 0 || quantidadeCoxinha > 0 || quantidadeCroissant > 0 || quantidadeEsfirra > 0 || quantidadeFrango > 0 || quantidadeHamburguer > 0 || quantidadeMilkshake > 0 || quantidadeSanduiche > 0){
        document.getElementById('outTotal').style.display = 'block';
        document.getElementById('finalizar-pedido').classList.remove('visually-hidden');
        document.getElementById('carrinho-vazio').classList.add('visually-hidden');
    }

    atualizarTotal();
};

function removerHamburguer(){
    var itemHamburguer = document.getElementById('itemHamburguer');
    itemHamburguer.style.display = 'block';
    
    if(quantidadeHamburguer >= 2){
        quantidadeHamburguer--;
    }
    outQuantidadeHamburguer.innerHTML = quantidadeHamburguer;

    var precoTotalHamburguer = precoHamburguer * quantidadeHamburguer;

    var outHamburguerPreco = document.getElementById('outHamburguerPreco');
    outHamburguerPreco.innerHTML = 'Preço R$:' + precoTotalHamburguer.toFixed(2);

    atualizarTotal();
};

function seletorHamburguer(){
    var itemHamburguer = document.getElementById('itemHamburguer');
    itemHamburguer.style.display = 'block';

    quantidadeHamburguer++;
    outQuantidadeHamburguer.innerHTML = quantidadeHamburguer;

    var precoTotalHamburguer = precoHamburguer * quantidadeHamburguer;

    var outHamburguerPreco = document.getElementById('outHamburguerPreco');
    outHamburguerPreco.innerHTML = 'Preço R$:' + precoTotalHamburguer.toFixed(2);

    if(quantidadeAcai > 0 || quantidadeBolinho > 0 || quantidadeCoxinha > 0 || quantidadeCroissant > 0 || quantidadeEsfirra > 0 || quantidadeFrango > 0 || quantidadeHamburguer > 0 || quantidadeMilkshake > 0 || quantidadeSanduiche > 0){
        document.getElementById('outTotal').style.display = 'block';
        document.getElementById('finalizar-pedido').classList.remove('visually-hidden');
        document.getElementById('carrinho-vazio').classList.add('visually-hidden');
    }

    atualizarTotal();
};

function cancelarHamburguer(){
    var itemHamburguer = document.getElementById('itemHamburguer');
    itemHamburguer.style.display = 'none';

    quantidadeHamburguer = 0;

    if(!(quantidadeAcai > 0 || quantidadeBolinho > 0 || quantidadeCoxinha > 0 || quantidadeCroissant > 0 || quantidadeEsfirra > 0 || quantidadeFrango > 0 || quantidadeHamburguer > 0 || quantidadeMilkshake > 0 || quantidadeSanduiche > 0)){
        document.getElementById('outTotal').style.display = 'none';
        document.getElementById('finalizar-pedido').classList.add('visually-hidden');
        document.getElementById('carrinho-vazio').classList.remove('visually-hidden');
    }

    atualizarTotal();
}

/***********************************************************************************************************/

//funções Acai

function adicionarAcai(){
    var itemAcai = document.getElementById('itemAcai');
    itemAcai.style.display = 'block';

    quantidadeAcai++;
    outQuantidadeAcai.innerHTML = quantidadeAcai;

    var precoTotalAcai = precoAcai * quantidadeAcai;

    var outAcaiPreco = document.getElementById('outAcaiPreco');
    outAcaiPreco.innerHTML = 'Preço R$:' + precoTotalAcai.toFixed(2);

    if(quantidadeAcai > 0 || quantidadeBolinho > 0 || quantidadeCoxinha > 0 || quantidadeCroissant > 0 || quantidadeEsfirra > 0 || quantidadeFrango > 0 || quantidadeHamburguer > 0 || quantidadeMilkshake > 0 || quantidadeSanduiche > 0){
        document.getElementById('outTotal').style.display = 'block';
        document.getElementById('finalizar-pedido').classList.remove('visually-hidden');
        document.getElementById('carrinho-vazio').classList.add('visually-hidden');
    }

    atualizarTotal();
};

function removerAcai(){
    var itemAcai = document.getElementById('itemAcai');
    itemAcai.style.display = 'block';
    
    if(quantidadeAcai >= 2){
        quantidadeAcai--;
    }
    outQuantidadeAcai.innerHTML = quantidadeAcai;

    var precoTotalAcai = precoAcai * quantidadeAcai;

    var outAcaiPreco = document.getElementById('outAcaiPreco');
    outAcaiPreco.innerHTML = 'Preço R$:' + precoTotalAcai.toFixed(2);

    atualizarTotal();
};

function seletorAcai(){
    var itemAcai = document.getElementById('itemAcai');
    itemAcai.style.display = 'block';

    quantidadeAcai++;
    outQuantidadeAcai.innerHTML = quantidadeAcai;

    var precoTotalAcai = precoAcai * quantidadeAcai;

    var outAcaiPreco = document.getElementById('outAcaiPreco');
    outAcaiPreco.innerHTML = 'Preço R$:' + precoTotalAcai.toFixed(2);
    
    if(quantidadeAcai > 0 || quantidadeBolinho > 0 || quantidadeCoxinha > 0 || quantidadeCroissant > 0 || quantidadeEsfirra > 0 || quantidadeFrango > 0 || quantidadeHamburguer > 0 || quantidadeMilkshake > 0 || quantidadeSanduiche > 0){
        document.getElementById('outTotal').style.display = 'block';
        document.getElementById('finalizar-pedido').classList.remove('visually-hidden');
        document.getElementById('carrinho-vazio').classList.add('visually-hidden');
    }

    atualizarTotal();
};

function cancelarAcai(){
    var itemAcai = document.getElementById('itemAcai');
    itemAcai.style.display = 'none';

    quantidadeAcai = 0;

    if(!(quantidadeAcai > 0 || quantidadeBolinho > 0 || quantidadeCoxinha > 0 || quantidadeCroissant > 0 || quantidadeEsfirra > 0 || quantidadeFrango > 0 || quantidadeHamburguer > 0 || quantidadeMilkshake > 0 || quantidadeSanduiche > 0)){
        document.getElementById('outTotal').style.display = 'none';
        document.getElementById('finalizar-pedido').classList.add('visually-hidden');
        document.getElementById('carrinho-vazio').classList.remove('visually-hidden');
    }

    atualizarTotal();
}

/***********************************************************************************************************/

//funções Frango

function adicionarFrango(){
    var itemFrango = document.getElementById('itemFrango');
    itemFrango.style.display = 'block';

    quantidadeFrango++;
    outQuantidadeFrango.innerHTML = quantidadeFrango;

    var precoTotalFrango = precoFrango * quantidadeFrango;

    var outFrangoPreco = document.getElementById('outFrangoPreco');
    outFrangoPreco.innerHTML = 'Preço R$:' + precoTotalFrango.toFixed(2);

    if(quantidadeAcai > 0 || quantidadeBolinho > 0 || quantidadeCoxinha > 0 || quantidadeCroissant > 0 || quantidadeEsfirra > 0 || quantidadeFrango > 0 || quantidadeHamburguer > 0 || quantidadeMilkshake > 0 || quantidadeSanduiche > 0){
        document.getElementById('outTotal').style.display = 'block';
        document.getElementById('finalizar-pedido').classList.remove('visually-hidden');
        document.getElementById('carrinho-vazio').classList.add('visually-hidden');
    }

    atualizarTotal();
};

function removerFrango(){
    var itemFrango = document.getElementById('itemFrango');
    itemFrango.style.display = 'block';
    
    if(quantidadeFrango >= 2){
        quantidadeFrango--;
    }
    outQuantidadeFrango.innerHTML = quantidadeFrango;

    var precoTotalFrango = precoFrango * quantidadeFrango;

    var outFrangoPreco = document.getElementById('outFrangoPreco');
    outFrangoPreco.innerHTML = 'Preço R$:' + precoTotalFrango.toFixed(2);

    atualizarTotal();
};

function seletorFrango(){
    var itemFrango = document.getElementById('itemFrango');
    itemFrango.style.display = 'block';

    quantidadeFrango++;
    outQuantidadeFrango.innerHTML = quantidadeFrango;

    var precoTotalFrango = precoFrango * quantidadeFrango;

    var outFrangoPreco = document.getElementById('outFrangoPreco');
    outFrangoPreco.innerHTML = 'Preço R$:' + precoTotalFrango.toFixed(2);
    
    if(quantidadeAcai > 0 || quantidadeBolinho > 0 || quantidadeCoxinha > 0 || quantidadeCroissant > 0 || quantidadeEsfirra > 0 || quantidadeFrango > 0 || quantidadeHamburguer > 0 || quantidadeMilkshake > 0 || quantidadeSanduiche > 0){
        document.getElementById('outTotal').style.display = 'block';
        document.getElementById('finalizar-pedido').classList.remove('visually-hidden');
        document.getElementById('carrinho-vazio').classList.add('visually-hidden');
    }

    atualizarTotal();
};

function cancelarFrango(){
    var itemFrango = document.getElementById('itemFrango');
    itemFrango.style.display = 'none';

    quantidadeFrango = 0;

    if(!(quantidadeAcai > 0 || quantidadeBolinho > 0 || quantidadeCoxinha > 0 || quantidadeCroissant > 0 || quantidadeEsfirra > 0 || quantidadeFrango > 0 || quantidadeHamburguer > 0 || quantidadeMilkshake > 0 || quantidadeSanduiche > 0)){
        document.getElementById('outTotal').style.display = 'none';
        document.getElementById('finalizar-pedido').classList.add('visually-hidden');
        document.getElementById('carrinho-vazio').classList.remove('visually-hidden');
    }

    
    atualizarTotal();
}

/***********************************************************************************************************/

//funções Coxinha

function adicionarCoxinha(){
    var itemCoxinha = document.getElementById('itemCoxinha');
    itemCoxinha.style.display = 'block';

    quantidadeCoxinha++;
    outQuantidadeCoxinha.innerHTML = quantidadeCoxinha;

    var precoTotalCoxinha = precoCoxinha * quantidadeCoxinha;

    var outCoxinhaPreco = document.getElementById('outCoxinhaPreco');
    outCoxinhaPreco.innerHTML = 'Preço R$:' + precoTotalCoxinha.toFixed(2);

    if(quantidadeAcai > 0 || quantidadeBolinho > 0 || quantidadeCoxinha > 0 || quantidadeCroissant > 0 || quantidadeEsfirra > 0 || quantidadeFrango > 0 || quantidadeHamburguer > 0 || quantidadeMilkshake > 0 || quantidadeSanduiche > 0){
        document.getElementById('outTotal').style.display = 'block';
        document.getElementById('finalizar-pedido').classList.remove('visually-hidden');
        document.getElementById('carrinho-vazio').classList.add('visually-hidden');
    }

    atualizarTotal();
};

function removerCoxinha(){
    var itemCoxinha = document.getElementById('itemCoxinha');
    itemCoxinha.style.display = 'block';
    
    if(quantidadeCoxinha >= 2){
        quantidadeCoxinha--;
    }
    outQuantidadeCoxinha.innerHTML = quantidadeCoxinha;

    var precoTotalCoxinha = precoCoxinha * quantidadeCoxinha;

    var outCoxinhaPreco = document.getElementById('outCoxinhaPreco');
    outCoxinhaPreco.innerHTML = 'Preço R$:' + precoTotalCoxinha.toFixed(2);

    atualizarTotal();
};

function seletorCoxinha(){
    var itemCoxinha = document.getElementById('itemCoxinha');
    itemCoxinha.style.display = 'block';

    quantidadeCoxinha++;
    outQuantidadeCoxinha.innerHTML = quantidadeCoxinha;

    var precoTotalCoxinha = precoCoxinha * quantidadeCoxinha;

    var outCoxinhaPreco = document.getElementById('outCoxinhaPreco');
    outCoxinhaPreco.innerHTML = 'Preço R$:' + precoTotalCoxinha.toFixed(2);

    if(quantidadeAcai > 0 || quantidadeBolinho > 0 || quantidadeCoxinha > 0 || quantidadeCroissant > 0 || quantidadeEsfirra > 0 || quantidadeFrango > 0 || quantidadeHamburguer > 0 || quantidadeMilkshake > 0 || quantidadeSanduiche > 0){
        document.getElementById('outTotal').style.display = 'block';
        document.getElementById('finalizar-pedido').classList.remove('visually-hidden');
        document.getElementById('carrinho-vazio').classList.add('visually-hidden');
    }
    
    atualizarTotal();
};

function cancelarCoxinha(){
    var itemCoxinha = document.getElementById('itemCoxinha');
    itemCoxinha.style.display = 'none';

    quantidadeCoxinha = 0;

    if(!(quantidadeAcai > 0 || quantidadeBolinho > 0 || quantidadeCoxinha > 0 || quantidadeCroissant > 0 || quantidadeEsfirra > 0 || quantidadeFrango > 0 || quantidadeHamburguer > 0 || quantidadeMilkshake > 0 || quantidadeSanduiche > 0)){
        document.getElementById('outTotal').style.display = 'none';
        document.getElementById('finalizar-pedido').classList.add('visually-hidden');
        document.getElementById('carrinho-vazio').classList.remove('visually-hidden');
    }

    atualizarTotal();
}

/***********************************************************************************************************/

//funções Croissant

function adicionarCroissant(){
    var itemCroissant = document.getElementById('itemCroissant');
    itemCroissant.style.display = 'block';

    quantidadeCroissant++;
    outQuantidadeCroissant.innerHTML = quantidadeCroissant;

    var precoTotalCroissant = precoCroissant * quantidadeCroissant;

    var outCroissantPreco = document.getElementById('outCroissantPreco');
    outCroissantPreco.innerHTML = 'Preço R$:' + precoTotalCroissant.toFixed(2);

    if(quantidadeAcai > 0 || quantidadeBolinho > 0 || quantidadeCoxinha > 0 || quantidadeCroissant > 0 || quantidadeEsfirra > 0 || quantidadeFrango > 0 || quantidadeHamburguer > 0 || quantidadeMilkshake > 0 || quantidadeSanduiche > 0){
        document.getElementById('outTotal').style.display = 'block';
        document.getElementById('finalizar-pedido').classList.remove('visually-hidden');
        document.getElementById('carrinho-vazio').classList.add('visually-hidden');
    }

    atualizarTotal();
};

function removerCroissant(){
    var itemCroissant = document.getElementById('itemCroissant');
    itemCroissant.style.display = 'block';
    
    if(quantidadeCroissant >= 2){
        quantidadeCroissant--;
    }
    outQuantidadeCroissant.innerHTML = quantidadeCroissant;

    var precoTotalCroissant = precoCroissant * quantidadeCroissant;

    var outCroissantPreco = document.getElementById('outCroissantPreco');
    outCroissantPreco.innerHTML = 'Preço R$:' + precoTotalCroissant.toFixed(2);

    atualizarTotal();
};

function seletorCroissant(){
    var itemCroissant = document.getElementById('itemCroissant');
    itemCroissant.style.display = 'block';

    quantidadeCroissant++;
    outQuantidadeCroissant.innerHTML = quantidadeCroissant;

    var precoTotalCroissant = precoCroissant * quantidadeCroissant;

    var outCroissantPreco = document.getElementById('outCroissantPreco');
    outCroissantPreco.innerHTML = 'Preço R$:' + precoTotalCroissant.toFixed(2);
    
    if(quantidadeAcai > 0 || quantidadeBolinho > 0 || quantidadeCoxinha > 0 || quantidadeCroissant > 0 || quantidadeEsfirra > 0 || quantidadeFrango > 0 || quantidadeHamburguer > 0 || quantidadeMilkshake > 0 || quantidadeSanduiche > 0){
        document.getElementById('outTotal').style.display = 'block';
        document.getElementById('finalizar-pedido').classList.remove('visually-hidden');
        document.getElementById('carrinho-vazio').classList.add('visually-hidden');
    }

    atualizarTotal();
};

function cancelarCroissant(){
    var itemCroissant = document.getElementById('itemCroissant');
    itemCroissant.style.display = 'none';

    quantidadeCroissant = 0;

    if(!(quantidadeAcai > 0 || quantidadeBolinho > 0 || quantidadeCoxinha > 0 || quantidadeCroissant > 0 || quantidadeEsfirra > 0 || quantidadeFrango > 0 || quantidadeHamburguer > 0 || quantidadeMilkshake > 0 || quantidadeSanduiche > 0)){
        document.getElementById('outTotal').style.display = 'none';
        document.getElementById('finalizar-pedido').classList.add('visually-hidden');
        document.getElementById('carrinho-vazio').classList.remove('visually-hidden');
    }

    atualizarTotal();
}

/***********************************************************************************************************/

//funções Esfirra

function adicionarEsfirra(){
    var itemEsfirra = document.getElementById('itemEsfirra');
    itemEsfirra.style.display = 'block';

    quantidadeEsfirra++;
    outQuantidadeEsfirra.innerHTML = quantidadeEsfirra;

    var precoTotalEsfirra = precoEsfirra * quantidadeEsfirra;

    var outEsfirraPreco = document.getElementById('outEsfirraPreco');
    outEsfirraPreco.innerHTML = 'Preço R$:' + precoTotalEsfirra.toFixed(2);

    if(quantidadeAcai > 0 || quantidadeBolinho > 0 || quantidadeCoxinha > 0 || quantidadeCroissant > 0 || quantidadeEsfirra > 0 || quantidadeFrango > 0 || quantidadeHamburguer > 0 || quantidadeMilkshake > 0 || quantidadeSanduiche > 0){
        document.getElementById('outTotal').style.display = 'block';
        document.getElementById('finalizar-pedido').classList.remove('visually-hidden');
        document.getElementById('carrinho-vazio').classList.add('visually-hidden');
    };

    atualizarTotal();
};

function removerEsfirra(){
    var itemEsfirra = document.getElementById('itemEsfirra');
    itemEsfirra.style.display = 'block';
    
    if(quantidadeEsfirra >= 2){
        quantidadeEsfirra--;
    }
    outQuantidadeEsfirra.innerHTML = quantidadeEsfirra;

    var precoTotalEsfirra = precoEsfirra * quantidadeEsfirra;

    var outEsfirraPreco = document.getElementById('outEsfirraPreco');
    outEsfirraPreco.innerHTML = 'Preço R$:' + precoTotalEsfirra.toFixed(2);

    atualizarTotal();
};

function seletorEsfirra(){
    var itemEsfirra = document.getElementById('itemEsfirra');
    itemEsfirra.style.display = 'block';

    quantidadeEsfirra++;
    outQuantidadeEsfirra.innerHTML = quantidadeEsfirra;

    var precoTotalEsfirra = precoEsfirra * quantidadeEsfirra;

    var outEsfirraPreco = document.getElementById('outEsfirraPreco');
    outEsfirraPreco.innerHTML = 'Preço R$:' + precoTotalEsfirra.toFixed(2);

    if(quantidadeAcai > 0 || quantidadeBolinho > 0 || quantidadeCoxinha > 0 || quantidadeCroissant > 0 || quantidadeEsfirra > 0 || quantidadeFrango > 0 || quantidadeHamburguer > 0 || quantidadeMilkshake > 0 || quantidadeSanduiche > 0){
        document.getElementById('outTotal').style.display = 'block';
        document.getElementById('finalizar-pedido').classList.remove('visually-hidden');
        document.getElementById('carrinho-vazio').classList.add('visually-hidden');
    }
    
    atualizarTotal();
};

function cancelarEsfirra(){
    var itemEsfirra = document.getElementById('itemEsfirra');
    itemEsfirra.style.display = 'none';

    quantidadeEsfirra = 0;

    if(!(quantidadeAcai > 0 || quantidadeBolinho > 0 || quantidadeCoxinha > 0 || quantidadeCroissant > 0 || quantidadeEsfirra > 0 || quantidadeFrango > 0 || quantidadeHamburguer > 0 || quantidadeMilkshake > 0 || quantidadeSanduiche > 0)){
        document.getElementById('outTotal').style.display = 'none';
        document.getElementById('finalizar-pedido').classList.add('visually-hidden');
        document.getElementById('carrinho-vazio').classList.remove('visually-hidden');
    }

    atualizarTotal();
}

/***********************************************************************************************************/

//funções Milkshake

function adicionarMilkshake(){
    var itemMilkshake = document.getElementById('itemMilkshake');
    itemMilkshake.style.display = 'block';

    quantidadeMilkshake++;
    outQuantidadeMilkshake.innerHTML = quantidadeMilkshake;

    var precoTotalMilkshake = precoMilkshake * quantidadeMilkshake;

    var outMilkshakePreco = document.getElementById('outMilkshakePreco');
    outMilkshakePreco.innerHTML = 'Preço R$:' + precoTotalMilkshake.toFixed(2);

    if(quantidadeAcai > 0 || quantidadeBolinho > 0 || quantidadeCoxinha > 0 || quantidadeCroissant > 0 || quantidadeEsfirra > 0 || quantidadeFrango > 0 || quantidadeHamburguer > 0 || quantidadeMilkshake > 0 || quantidadeSanduiche > 0){
        document.getElementById('outTotal').style.display = 'block';
        document.getElementById('finalizar-pedido').classList.remove('visually-hidden');
        document.getElementById('carrinho-vazio').classList.add('visually-hidden');
    }

    atualizarTotal();
    
};

function removerMilkshake(){
    var itemMilkshake = document.getElementById('itemMilkshake');
    itemMilkshake.style.display = 'block';
    
    if(quantidadeMilkshake >= 2){
        quantidadeMilkshake--;
    }
    outQuantidadeMilkshake.innerHTML = quantidadeMilkshake;

    var precoTotalMilkshake = precoMilkshake * quantidadeMilkshake;

    var outMilkshakePreco = document.getElementById('outMilkshakePreco');
    outMilkshakePreco.innerHTML = 'Preço R$:' + precoTotalMilkshake.toFixed(2);

    atualizarTotal();
};

function seletorMilkshake(){
    var itemMilkshake = document.getElementById('itemMilkshake');
    itemMilkshake.style.display = 'block';

    quantidadeMilkshake++;
    outQuantidadeMilkshake.innerHTML = quantidadeMilkshake;

    var precoTotalMilkshake = precoMilkshake * quantidadeMilkshake;

    var outMilkshakePreco = document.getElementById('outMilkshakePreco');
    outMilkshakePreco.innerHTML = 'Preço R$:' + precoTotalMilkshake.toFixed(2);

    if(quantidadeAcai > 0 || quantidadeBolinho > 0 || quantidadeCoxinha > 0 || quantidadeCroissant > 0 || quantidadeEsfirra > 0 || quantidadeFrango > 0 || quantidadeHamburguer > 0 || quantidadeMilkshake > 0 || quantidadeSanduiche > 0){
        document.getElementById('outTotal').style.display = 'block';
        document.getElementById('finalizar-pedido').classList.remove('visually-hidden');
        document.getElementById('carrinho-vazio').classList.add('visually-hidden');
    }

    atualizarTotal();
};

function cancelarMilkshake(){
    var itemMilkshake = document.getElementById('itemMilkshake');
    itemMilkshake.style.display = 'none';

    quantidadeMilkshake = 0;

    if(!(quantidadeAcai > 0 || quantidadeBolinho > 0 || quantidadeCoxinha > 0 || quantidadeCroissant > 0 || quantidadeEsfirra > 0 || quantidadeFrango > 0 || quantidadeHamburguer > 0 || quantidadeMilkshake > 0 || quantidadeSanduiche > 0)){
        document.getElementById('outTotal').style.display = 'none';
        document.getElementById('finalizar-pedido').classList.add('visually-hidden');
        document.getElementById('carrinho-vazio').classList.remove('visually-hidden');
    }

    atualizarTotal();
}

/***********************************************************************************************************/

//funções Sanduiche

function adicionarSanduiche(){
    var itemSanduiche = document.getElementById('itemSanduiche');
    itemSanduiche.style.display = 'block';

    quantidadeSanduiche++;
    outQuantidadeSanduiche.innerHTML = quantidadeSanduiche;

    var precoTotalSanduiche = precoSanduiche * quantidadeSanduiche;

    var outSanduichePreco = document.getElementById('outSanduichePreco');
    outSanduichePreco.innerHTML = 'Preço R$:' + precoTotalSanduiche.toFixed(2);

    if(quantidadeAcai > 0 || quantidadeBolinho > 0 || quantidadeCoxinha > 0 || quantidadeCroissant > 0 || quantidadeEsfirra > 0 || quantidadeFrango > 0 || quantidadeHamburguer > 0 || quantidadeMilkshake > 0 || quantidadeSanduiche > 0){
        document.getElementById('outTotal').style.display = 'block';
        document.getElementById('finalizar-pedido').classList.remove('visually-hidden');
        document.getElementById('carrinho-vazio').classList.add('visually-hidden');
    }

    atualizarTotal();
};

function removerSanduiche(){
    var itemSanduiche = document.getElementById('itemSanduiche');
    itemSanduiche.style.display = 'block';
    
    if(quantidadeSanduiche >= 2){
        quantidadeSanduiche--;
    }
    outQuantidadeSanduiche.innerHTML = quantidadeSanduiche;

    var precoTotalSanduiche = precoSanduiche * quantidadeSanduiche;

    var outSanduichePreco = document.getElementById('outSanduichePreco');
    outSanduichePreco.innerHTML = 'Preço R$:' + precoTotalSanduiche.toFixed(2);

    atualizarTotal();
};

function seletorSanduiche(){
    var itemSanduiche = document.getElementById('itemSanduiche');
    itemSanduiche.style.display = 'block';

    quantidadeSanduiche++;
    outQuantidadeSanduiche.innerHTML = quantidadeSanduiche;

    var precoTotalSanduiche = precoSanduiche * quantidadeSanduiche;

    var outSanduichePreco = document.getElementById('outSanduichePreco');
    outSanduichePreco.innerHTML = 'Preço R$:' + precoTotalSanduiche.toFixed(2);

    if(quantidadeAcai > 0 || quantidadeBolinho > 0 || quantidadeCoxinha > 0 || quantidadeCroissant > 0 || quantidadeEsfirra > 0 || quantidadeFrango > 0 || quantidadeHamburguer > 0 || quantidadeMilkshake > 0 || quantidadeSanduiche > 0){
        document.getElementById('outTotal').style.display = 'block';
        document.getElementById('finalizar-pedido').classList.remove('visually-hidden');
        document.getElementById('carrinho-vazio').classList.add('visually-hidden');
    }
    
    atualizarTotal();
};

function cancelarSanduiche(){
    var itemSanduiche = document.getElementById('itemSanduiche');
    itemSanduiche.style.display = 'none';

    quantidadeSanduiche = 0;

    if(!(quantidadeAcai > 0 || quantidadeBolinho > 0 || quantidadeCoxinha > 0 || quantidadeCroissant > 0 || quantidadeEsfirra > 0 || quantidadeFrango > 0 || quantidadeHamburguer > 0 || quantidadeMilkshake > 0 || quantidadeSanduiche > 0)){
        document.getElementById('outTotal').style.display = 'none';
        document.getElementById('finalizar-pedido').classList.add('visually-hidden');
        document.getElementById('carrinho-vazio').classList.remove('visually-hidden');
    }

    atualizarTotal();
}

/***********************************************************************************************************/

//funções Bolinho

function adicionarBolinho(){
    var itemBolinho = document.getElementById('itemBolinho');
    itemBolinho.style.display = 'block';

    quantidadeBolinho++;
    outQuantidadeBolinho.innerHTML = quantidadeBolinho;

    var precoTotalBolinho = precoBolinho * quantidadeBolinho;

    var outBolinhoPreco = document.getElementById('outBolinhoPreco');
    outBolinhoPreco.innerHTML = 'Preço R$:' + precoTotalBolinho.toFixed(2);

    if(quantidadeAcai > 0 || quantidadeBolinho > 0 || quantidadeCoxinha > 0 || quantidadeCroissant > 0 || quantidadeEsfirra > 0 || quantidadeFrango > 0 || quantidadeHamburguer > 0 || quantidadeMilkshake > 0 || quantidadeSanduiche > 0){
        document.getElementById('outTotal').style.display = 'block';
        document.getElementById('finalizar-pedido').classList.remove('visually-hidden');
        document.getElementById('carrinho-vazio').classList.add('visually-hidden');
    }

    atualizarTotal();
};

function removerBolinho(){
    var itemBolinho = document.getElementById('itemBolinho');
    itemBolinho.style.display = 'block';
    
    if(quantidadeBolinho >= 2){
        quantidadeBolinho--;
    }
    outQuantidadeBolinho.innerHTML = quantidadeBolinho;

    var precoTotalBolinho = precoBolinho * quantidadeBolinho;

    var outBolinhoPreco = document.getElementById('outBolinhoPreco');
    outBolinhoPreco.innerHTML = 'Preço R$:' + precoTotalBolinho.toFixed(2);

    atualizarTotal();
};

function seletorBolinho(){
    var itemBolinho = document.getElementById('itemBolinho');
    itemBolinho.style.display = 'block';

    quantidadeBolinho++;
    outQuantidadeBolinho.innerHTML = quantidadeBolinho;

    var precoTotalBolinho = precoBolinho * quantidadeBolinho;

    var outBolinhoPreco = document.getElementById('outBolinhoPreco');
    outBolinhoPreco.innerHTML = 'Preço R$:' + precoTotalBolinho.toFixed(2);

    if(quantidadeAcai > 0 || quantidadeBolinho > 0 || quantidadeCoxinha > 0 || quantidadeCroissant > 0 || quantidadeEsfirra > 0 || quantidadeFrango > 0 || quantidadeHamburguer > 0 || quantidadeMilkshake > 0 || quantidadeSanduiche > 0){
        document.getElementById('outTotal').style.display = 'block';
        document.getElementById('finalizar-pedido').classList.remove('visually-hidden');
        document.getElementById('carrinho-vazio').classList.add('visually-hidden');
    }

    atualizarTotal();
    
};

function cancelarBolinho(){
    var itemBolinho = document.getElementById('itemBolinho');
    itemBolinho.style.display = 'none';

    quantidadeBolinho = 0;

    if(!(quantidadeAcai > 0 || quantidadeBolinho > 0 || quantidadeCoxinha > 0 || quantidadeCroissant > 0 || quantidadeEsfirra > 0 || quantidadeFrango > 0 || quantidadeHamburguer > 0 || quantidadeMilkshake > 0 || quantidadeSanduiche > 0)){
        document.getElementById('outTotal').style.display = 'none';
        document.getElementById('finalizar-pedido').classList.add('visually-hidden');
        document.getElementById('carrinho-vazio').classList.remove('visually-hidden');
    }

    atualizarTotal();
}
/***********************************************************************************************************/