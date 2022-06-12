$(document).ready(function() {
    $('.header-burger').click(function() {
        $('.header-burger,.navbar').toggleClass('active');
        $('body').toggleClass('lock');
    });
});