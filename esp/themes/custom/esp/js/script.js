jQuery(document).ready(function( $ ) {
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var headerHeight;
    var navHeight;
    $('.navigation.main').scrollToFixed();
    console.log('hey');
    if (windowWidth >= 750) {
        $('.header.lrg').css({
            'height' : windowHeight,
            'max-height' : windowHeight
         });
    }

});
