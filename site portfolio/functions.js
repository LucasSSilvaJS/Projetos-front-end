let count = 0;

for(let i = 1; i <= 7; i++){
    let janela = $('.janela:nth-of-type(' + i + ')');
    let btJanela = $('.janela:nth-of-type(' + i + ') button');
    let btFechar = $('.janela:nth-of-type(' + i + ') .circulo');
    let exibir = $('.exibir-projetos');

    btFechar.click(function(){
        janela.css('display', 'none');
        count = count + 1;
        if(count == 7){
            $('.janela').css('display', 'block');
            count = 0;
            i = 1;
        }
    })

    btJanela.click(function(){
        janela.css('display', 'none');
        count = count + 1;
        if(count == 7){
            $('.janela').css('display', 'block');
            count = 0;
            i = 1;
        }  
    });

    btJanela.click(function(){

        let links = ['https://mahiromiku.github.io/Projetos-front-end/projeto%20frontend%20grau/', 'https://mahiromiku.github.io/Projetos-front-end/projeto_movimento_social/', 'https://mahiromiku.github.io/Projetos-front-end/projeto_cartao_apresentacaoDBZ/', 'https://mahiromiku.github.io/Projetos-front-end/projeto_agencia_turismo/', 'https://mahiromiku.github.io/Projetos-front-end/projeto_montagem_pc/', 'https://mahiromiku.github.io/Projetos-front-end/projeto_boostrap_lanches/', 'https://mahiromiku.github.io/Projetos-front-end/projeto_portfolio/']
        let titulo = ['Projeto portfólio', 'Projeto venda de lanches', 'Projeto montagem de computador', 'Projeto turismo', 'Projeto cartão de apresentação', 'Projeto movimento social', 'Projeto guia de acessibilidade']
        let tituloReverse = titulo.reverse();
        exibir.html('<div class="bg-projeto"><div class="descricao-projeto"><p>'+ tituloReverse[i - 1] +'</p><p><a href="'+ links[i -1] +'" target="_blank">Acessar a página</a><p></div></div>');
        if(i == 7){
            $('.bg-projeto').css('background-image', 'url(projetoportfolio.png)');
        }
        if(i == 6){
            $('.bg-projeto').css('background-image', 'url(projetolanches.png)');
        }
        if(i == 5){
            $('.bg-projeto').css('background-image', 'url(projetomontagem.png)');
        }
        if(i == 4){
            $('.bg-projeto').css('background-image', 'url(projetoturismo.png)');
        }
        if(i == 3){
            $('.bg-projeto').css('background-image', 'url(projetocartao.png)');
        }
        if(i == 2){
            $('.bg-projeto').css('background-image', 'url(projetomovimentosocial.png)');
        }
        if(i == 1){
            $('.bg-projeto').css('background-image', 'url(projetoguia.png)');
        }
    });
};

/*******************************************************/

$('.menu-item').on('click', function(){
    var targetSection = $(this).data('target');

    $('html, body').animate({
        scrollTop: $('.' + targetSection).offset().top - 120
    }, 800);
});

/****************************************/
$(document).ready(function () {
    function isSectionVisible($element) {
        var windowTop = $(window).scrollTop();
        var windowBottom = windowTop + $(window).height();
        var elementTop = $element.offset().top;
        var elementBottom = elementTop + $element.outerHeight();
      
        return (elementTop >= windowTop && elementTop < windowBottom) ||
               (elementBottom > windowTop && elementBottom <= windowBottom) ||
               (elementTop <= windowTop && elementBottom >= windowBottom);
      }
    
      let animationClass = [
        {elemento: '.saiba-mais h1', classe: 'animate__fadeInDownBig'}, 
        {elemento: '.saiba-mais h3', classe: 'animate__fadeInLeftBig'},
        {elemento: '.desc', classe: 'animate__fadeInRightBig'},
        {elemento: '.janela', classe: 'animate__bounceIn'},
        {elemento: '.exibir-projetos', classe: 'animate__backInRight'}
    ];
    
      function addClassWhenVisible() {
        for(let k = 0; k < 5; k++){
            if (isSectionVisible($(animationClass[k].elemento))) {
              $(animationClass[k].elemento).addClass(animationClass[k].classe);
            }
        }
      }
    
      $(window).on("scroll", function() {
        addClassWhenVisible();
      });
});


  /************************************/

  
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 900,
    effect: 'cube',
    zoom: {
        maxRatio: 5,
    },
    autoplay: {
        delay: 1000,
      },
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  $('.btn').click(function(){
    window.open('https://www.linkedin.com/in/lucas-de-souza-silva-4937bb198/');
  });
