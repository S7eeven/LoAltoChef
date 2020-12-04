$(document).ready(function(){

    $(window).scroll(function(){
        var windowWidth = $(window).width();

        /* OBTENEMOS EN QUE POSISCION SE ENCUENTRA EL SCROLL */
        if(windowWidth > 800){
            var scroll = $(window).scrollTop();
            /* Para cuando se haga scroll hacia abajo el eslogan valla bajando copo a poco */
            $('header .textos').css({
                'transform': 'translate(0px,' + scroll / 2 + '%)'
            });

            $('.acerca-de article').css({
                'transform': 'translate(0px, -' + scroll / 4 + '%)'
            });
        }
    });

    /* En caso de que la pantalla sea menor a 800px el contenedor de aserca de se ponga statico */
    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth < 800){
            $('.acerca-de article').css({
                'transform': 'translate(0px, 0px)'
            });
        }
    });

});