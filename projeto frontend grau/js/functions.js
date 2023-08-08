function seletorResponsivo() {
    var contentWidth = $(window).outerWidth();
    var isMobile = (contentWidth <= 840);

    $('nav').toggleClass('mobile', isMobile).toggleClass('desktop', !isMobile);
    
    // Verifica se o menu está aberto e fecha-o ao mudar para o modo desktop
    if (!isMobile && $('.open-close').hasClass('active')) {
        $('.open-close').removeClass('active');
        $('.menu ul').hide();
    }
    
    $('.menu ul').toggle(!isMobile);
    
    // Redefine o ícone do menu para a barra quando a tela é redimensionada para a versão móvel
    if (isMobile) {
        $('.open-close i').removeClass('fa-xmark').addClass('fa-bars');
    }
}

function clickMenu() {
    var menu = $('.open-close');

    menu.click(function () {
        menu.toggleClass('active');
        $('.menu ul').toggle(menu.hasClass('active'));
        
        if (menu.hasClass('active')) {
            menu.find('i').removeClass('fa-bars').addClass('fa-xmark');
        } else {
            menu.find('i').removeClass('fa-xmark').addClass('fa-bars');
        }
    });
}

function menuDinamico(totalPaginas) {

  for (let pagina = 1; pagina <= totalPaginas; pagina++) {
      // Cria o seletor dinâmico para cada ID
      const localizacaoSelector = `#localizacao-pagina-${pagina}`;
      const descricaoSelector = `#descricao-pagina-${pagina}`;
      const ajudaSelector = `#ajuda-pagina-${pagina}`;

      // Evento de clique para a localização
      $(localizacaoSelector).click(function () {
          $('.container-evento .center').load(`localizacao${pagina}.html`);
          $('.eventos-destaque').css('display', 'none');
          $('.avaliacao-item').css('display', 'block');
          return false;
      });

      // Evento de clique para a descrição
      $(descricaoSelector).click(function () {
          $('.container-evento .center').load(`descricao${pagina}.html`);
          $('.eventos-destaque').css('display', 'block');
          $('.avaliacao-item').css('display', 'block');
          return false;
      });

      // Evento de clique para a ajuda
      $(ajudaSelector).click(function () {
          $('.container-evento .center').load(`ajuda${pagina}.html`);
          $('.eventos-destaque').css('display', 'none');
          $('.avaliacao-item').css('display', 'none');
          return false;
      });
  }
}


$(function () {
    seletorResponsivo();
    clickMenu();
    menuDinamico(9);

    $(window).resize(function () {
        seletorResponsivo();
    });

    /*pfvr não mexer no código acima*/
    
});

//sistema de aumentar e diminuir fonte

$(document).ready(function() {
    var baseFontSize = parseInt($('body').css('font-size')); // Obtém o tamanho base da fonte do corpo
  
    $('#increase').click(function() {
      increaseFont();
    });
  
    $('#decrease').click(function() {
      decreaseFont();
    });
  
    function increaseFont() {
        $('p, h2, footer span, li a, label').each(function() {
          var currentFontSize = parseInt($(this).css('font-size'));
          var newFontSize = currentFontSize + 2;
          var maxFontSize = 22; // Defina o tamanho máximo desejado para a fonte, por exemplo, 24 pixels
      
          if (newFontSize <= maxFontSize) {
            $(this).css('font-size', newFontSize + 'px');
          }
          
        });
      }      
  
    function decreaseFont() {
      $('p, h2, footer span, li a, label').each(function() {
        var currentFontSize = parseInt($(this).css('font-size'));
        $(this).css('font-size', Math.max(currentFontSize - 2, baseFontSize) + 'px');
      });
    }
  });

  //sistema de colocar dark mode

  $(document).ready(function() {
    var darkModeActive = localStorage.getItem('darkModeActive') === 'true' || false;
    updateDarkMode(darkModeActive);
  
    $('#toggleDarkMode').click(function() {
      darkModeActive = !darkModeActive; // Toggle the state of dark mode
      localStorage.setItem('darkModeActive', darkModeActive);
      updateDarkMode(darkModeActive);
    });
  
    function updateDarkMode(darkModeActive) {
      $('body, p, h2, a, ul, .menu-banner li').toggleClass('dark-mode', darkModeActive);
      if (darkModeActive) {
        // Dark mode is activated
        $('.menu li').addClass('dark-mode'); // Add 'dark-mode' class to menu items
        $('.logo img').attr('src', 'img/logoguia2.png'); // Change the logo image to the dark mode version
      } else {
        // Dark mode is deactivated
        $('.menu li').removeClass('dark-mode'); // Remove 'dark-mode' class from menu items
        $('.logo img').attr('src', 'img/logoguia.png'); // Change the logo image to the normal version
  
        // Check if the dynamic menu was triggered and remove 'dark-mode' class from additional elements
        if ($('.menu ul').is(':visible')) {
          $('body, p, h2, a, ul, .menu-banner li').removeClass('dark-mode');
        }
      }
    }
  });
   


  //carrossel responsividade
  $(function(){
    $('.carrossel-conteudo:not(.item-page .carrossel-conteudo)').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      centerMode: true,
      centerPadding: '150px',
      responsive: [
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            centerMode: true,
            centerPadding: '280px'
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            centerMode: true,
            centerPadding: '240px'
          }
        },
        {
          breakpoint: 1120,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            centerMode: true,
            centerPadding: '220px'
          }
        },
        {
          breakpoint: 1075,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            arrows: false,
            centerMode: true,
            centerPadding: '340px'
          }
        },
        {
          breakpoint: 1010,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            arrows: false,
            centerMode: true,
            centerPadding: '320px'
          }
        },
        {
          breakpoint: 964,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            arrows: false,
            centerMode: true,
            centerPadding: '280px'
          }
        },
        {
          breakpoint: 884,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            arrows: false,
            centerMode: true,
            centerPadding: '240px'
          }
        },
        {
          breakpoint: 804,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            arrows: false,
            centerMode: true,
            centerPadding: '200px'
          }
        },
        {
          breakpoint: 724,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            arrows: false,
            centerMode: true,
            centerPadding: '160px'
          }
        },
        {
          breakpoint: 664,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            arrows: false,
            centerMode: true,
            centerPadding: '120px'
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            arrows: false,
            centerMode: true,
            centerPadding: '80px'
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            arrows: false,
            centerMode: true,
            centerPadding: '60px'
          }
        },
        {
          breakpoint: 432,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0',
            variableWidth: true
          }
        }
      ]
    });
  });

  $(function(){
    $('.item-page .carrossel-conteudo').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      centerMode: true,
      centerPadding: '480px',
      responsive: [
        {
          breakpoint: 1340,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            centerPadding: '460px'
          }
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            centerPadding: '440px'
          }
        },
        {
          breakpoint: 1260,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            centerPadding: '420px'
          }
        },
        {
          breakpoint: 1216,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            centerPadding: '400px'
          }
        },
        {
          breakpoint: 1170,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            centerPadding: '380px'
          }
        },
        {
          breakpoint: 1130,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            centerPadding: '360px'
          }
        },
        {
          breakpoint: 1090,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            centerPadding: '340px'
          }
        },
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            centerPadding: '320px'
          }
        },
        {
          breakpoint: 1010,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            centerPadding: '280px'
          }
        },
        {
          breakpoint: 924,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            centerPadding: '240px'
          }
        },
        {
          breakpoint: 840,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            centerPadding: '200px'
          }
        },
        {
          breakpoint: 760,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            centerPadding: '160px'
          }
        },
        {
          breakpoint: 670,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            centerPadding: '120px'
          }
        },
        {
          breakpoint: 590,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            centerPadding: '80px'
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            centerPadding: '40px'
          }
        },
        {
          breakpoint: 410,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            centerPadding: '0px'
          }
        },
        {
          breakpoint: 325,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            centerPadding: '-40px'
          }
        }
      ]
    });
  });

  /****************************************************** */
  $(document).ready(function() {

    // Função para aplicar o visual das estrelas (usada tanto para o hover quanto para o clique)
    function applyStarVisual(index) {
        $("section.avaliacao-item span").each(function(i) {
            if (i < index) {
                $(this).addClass("clicked").find("i").addClass("fa-solid").removeClass("fa-regular");
            } else {
                $(this).removeClass("clicked").find("i").removeClass("fa-solid").addClass("fa-regular");
            }
        });
    }

    // Quando uma estrela é clicada
    $("section.avaliacao-item span").click(function() {
        var index = $(this).index();
        applyStarVisual(index);
        alert('Obrigado pela avaliação!');
    });
});

document.getElementById('btSubmit').addEventListener('click', () => {
  var nome = document.getElementById('nome');
  var email = document.getElementById('email');
  var mensagem = document.getElementById('mensagem');
  
  if(nome.value == '' || email.value == '' || mensagem.value == ''){
    alert('Preencha os campos para poder enviar o email');
    nome.focus();
    return;
  };
})