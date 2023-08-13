$(function(){
    var delay = 3000;
    var curIndex = 0;
    var amt;

    initSlider();
    autoPlay();

    function initSlider(){
        amt = $('.sobre-autor').length;
        var sizeContainer = 100 * amt;
        var sizeBoxSingle = 100 / amt;
        $('.sobre-autor').css('width', sizeBoxSingle+'%');
        $('.scroll-wraper').css('width', sizeContainer+'%');

        for(var i = 0; i < amt; i++){
            if(i == 0){
                $('.slider-bullets').append('<div style="background-color: black;"></div>')
            }else{
                $('.slider-bullets').append('<div></div>')
            };
        };
    };

    function autoPlay(){
        setInterval(function(){
            curIndex++;
            if(curIndex == amt){
                curIndex = 0;
            }
            goToSlider(curIndex);
        }, delay);
    };

    function goToSlider(curIndex){
        var offSetX = $('.sobre-autor').eq(curIndex).offset().left - $('.scroll-wraper').offset().left;
        $('.slider-bullets div').css('background-color', 'rgb(200, 200, 200)');
        $('.slider-bullets div').eq(curIndex).css('background-color', 'black');
        $('.scrollEquipe').stop().animate({'scrollLeft': offSetX+'px'});
    };

    $(window).resize(function(){
        $('.scrollEquipe').stop().animate({'scrollLeft': 0});
    });
});