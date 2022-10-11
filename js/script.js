$(document).ready(function () {
    $('.header-bar').on('click', function () {
        $(this).toggleClass('active')
        $('.header-menu').toggleClass('is-show');
    });
    $('li.menu-has-child a').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('is-show')
        $(this).parent().toggleClass('is-show');
    });
    
});