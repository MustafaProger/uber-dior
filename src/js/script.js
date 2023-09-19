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


function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: "smooth",
    })
}

window.onload=function(){

    // Плавная прокрутка принажатии на кнопку "Читать далее"
    let read_more_button = document.querySelector(".read_more_button");
    let about_us_1 = document.querySelector("#about_us");

    read_more_button.addEventListener('click', () => {
        scrollTo(about_us_1);
        console.log('Все работает');
    }); 
}