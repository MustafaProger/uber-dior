$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $(".header__burger").toggleClass('active');
        $(".header__menu").toggleClass('active');
        $("body").toggleClass('lock')
        $(".subheader").toggleClass('lock')
        $(".promo").toggleClass('lock')
        $(".advantage").toggleClass('lock')
        $(".mobile").toggleClass('lock')
        $(".chose").toggleClass('lock')
        $(".condition").toggleClass('lock')
        $(".world").toggleClass('lock')
        $(".footer").toggleClass('lock')
    });
});