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
        $(".ourcar").toggleClass('lock')
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

    let IDname = document.querySelector("#id");
    let scrollIDname = document.querySelector("#id");

    IDname.addEventListener('click', () => {
        scrollTo(scrollIDname);
        console.log('Все работает');
    }); 
}
