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
        $(".cities").toggleClass('lock')
        $(".yourcar").toggleClass('lock')
    });
});


function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: "smooth",
    })
}

window.onload=function(){

    // Плавная прокрутка принажатии на кнопку "Читать далее"
    let header__link__condition = document.querySelector("#header__link__condition");
    let condition = document.querySelector("#condition");

    header__link__condition.addEventListener('click', () => {
        scrollTo(condition);
        console.log('Все работает');
    }); 
}