$(document).ready(function(){
    //Efectos Menu
    //accedemos a los elementos del menu
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });
        //dar animacion al menu en escala
        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));

    });

    //Efectos para el eslogan
    //solo si la pantalla es 800px se apleique es eslogan
    //con el wibdows por demos ver el tamanio de la pantalla
    //si en ancho de la pantalla es mayor a 800px aplique
    if( $(window).width() > 800 ){
        $('header .textos').css({
            //nuestro eslogan va a empezar un ona opacidad de cero
            opacity: 0,
            marginTop: 0
        });

        //nus muestar nuestro eslogan ahra con una opacidad de 1
        $('header .textos').animate({
            //nuestro eslogan va a empezar un ona opacidad de cero
            opacity: 1,
            marginTop: '-52px'
            //, 1500 es el tiempo que tarde en minisegundos
        }, 1500);
    }

    //Scroll Elementos Menu
    //obtenemos todos los elementos en un variable
    //con jquery accedemso a la posicion del cuando hagamos scroll
    var acerdaDe = $('#acerca-de').offset().top;
    var btn_menu = $('#platillos').offset().top; 
    var btn_galeria = $('#galeria').offset().top;
    var btn_ubicacion = $('#ubicacion').offset().top;   //calcualmos la posicion en la pantalla de acerde de

    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 700 //o podemos poner la variable acercaDe -100
        }, 500);
    });

    $('#btn-menu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: btn_menu //o podemos poner la variable acercaDe -100
        }, 500);
    });

    $('#btn-galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: btn_galeria //o podemos poner la variable acercaDe -100
        }, 500);
    });

    $('#btn-ubicacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: btn_ubicacion //o podemos poner la variable acercaDe -100
        }, 500);
    });

});