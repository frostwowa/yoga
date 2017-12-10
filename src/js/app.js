// example of simple includes for js
//=include lib/jquery.min.js
//=include lib/jquery.fancybox.min.js
//=include lib/owl.carousel.min.js

// carousel arrows
const navArrows = [`
    <svg class="icon icon-arrow-prev">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-prev"></use>
    </svg>`,
    `<svg class="icon icon-arrow-next">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-next"></use>
    </svg>`];

// carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        navElement: 'button',
        navText: navArrows,
        animateOut: 'fadeOut',
        dots: true,
        autoHeight: true
    })
});

// menu
(function () {
    var burger   = $('.js-burger'),
        menu     = $('.js-menu'),
        menuItem = $('.js-menu-item');
    burger.on('click', function(){
        burger.toggleClass('active');
        menu.toggleClass('visible');
    });
    menuItem.on('click', function () {
        menuItem.removeClass('active');
        $(this).addClass('active');
    });
}());


(function () {
    $('.js-price-btn').hover(function () {
        $(this).parents('.js-price').find('.js-price-head').css('background-color', '#2E2EFE');
    }, function(){
        $(this).parents('.js-price').find('.js-price-head').css('background-color', '#5b6ceb');
    });
}());



