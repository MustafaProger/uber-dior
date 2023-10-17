document.getElementById('footer').innerHTML = '\
<section class="footer" style="padding: 20px 0 40px 0">\
    <div class="line"></div>\
    <div class="content row">\
        <div class="col-md-3 order_media">\
            <div class="media">\
                <a href="https://www.facebook.com/uber?uclick_id=06382d58-faf9-439f-a579-c3987300798e"\
                    target="_blank" class="media__item facebook" style=""><img src="../src/icons/footer/media/facebook.svg"\
                        alt="">\</a>\
                <a href="https://twitter.com/uber?uclick_id=06382d58-faf9-439f-a579-c3987300798e"\
                    target="_blank" class="media__item twitter"><img src="../src/icons/footer/media/twitter.svg" alt=""></a>\
                <a href="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F1815218%3Fuclick_id%3D06382d58-faf9-439f-a579-c3987300798e"\
                    target="_blank" class="media__item linkdedin"><img src="../src/icons/footer/media/linkedin.svg"\
                        alt=""></a>\
                <a href="https://www.instagram.com/uber/?uclick_id=06382d58-faf9-439f-a579-c3987300798e"\
                    target="_blank" class="media__item instagram"><img src="../src/icons/footer/media/instagram.svg"\
                        alt=""></a>\
            </div>\
        </div>\
        <div class="col-md-6 order_link">\
            <div class="link">\
                <div class="toplink">\
                    <a href="index.html#promo" class="toplink__item">На главную</a>\
                    <a href="cities.html" class="toplink__item" style="padding: 0 10px">Города</a>\
                    <a href="request.html" class="toplink__item">Для водителей</a>\
                </div>\
                <div class="sublink">\
                    <a href="#" class="sublink__item">Центр поддержки</a>\
                    <a href="#" class="sublink__item">Вакансии</a>\
                    <a href="#" class="sublink__item">Разработчики</a>\
                    <a href="#" class="sublink__item">Блог</a>\
                    <a href="#" class="sublink__item">О нас</a>\
                </div>\
                <div class="language">\
                    <span></span>\
                    <select id="language-select">\
                        <option value="ru">Русский</option>\
                        <option value="en">English</option>\
                    </select>\
                </div>\
            </div>\
        </div>\
        <div class="col-md-3 order_download">\
            <div class="download">\
                <a href="https://apps.apple.com/ru/app/uber-%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7-%D0%BF%D0%BE%D0%B5%D0%B7%D0%B4%D0%BE%D0%BA/id368677368"\
                    target="_blank" class="download__item"><img src="../src/icons/footer/download/apple-btn.svg"\
                        alt="" style="width: 80px; height: 80px;"></a>\
                <a href="https://play.google.com/store/apps/details?id=com.ubercab&hl=ru&gl=US&pli=1"\
                    target="_blank" class="download__item" id="download__item_2"><img\
                        src="../src/icons/footer/download/google-btn.svg" alt=""\
                        style="width: 80px; height: 80px;"></a>\
                <a href="https://apps.microsoft.com/store/detail/uber/9WZDNCRFHXRD?hl=ru-ru&gl=ru" target="_blank"\
                    class="download__item" id="download__item_3"><img\
                        src="../src/icons/footer/download/window-btn.svg" alt=""\
                        style="width: 80px; height: 80px;"></a>\
            </div>\
        </div>\
    </div>\
</section>\
\
<style>\
    .footer .link .toplink .toplink__item {\
        font-size: 19px;\
    }\
    .footer .link .sublink .sublink__item {\
        font-size: 14px\
    }\
    .language span::after {\
        content: "Русский";\
        position: absolute;\
        color: #1FABC7;\
        left: 44%;\
        top: 75%;\
        width: 0%;\
        height: 0%;\
        z-index: 3;\
    }\
\
    @media (max-width: 1200px){\
        .language span::after {\
            left: 42%;\
        }\
    }\
    @media (max-width: 943px) {\
        .language span::after {\
            top: 80%;\
            left: 41%;\
        }\
    }\
    @media (max-width: 930px) {\
        .language span::after {\
            left: 39%;\
        }\
    }\
    @media (max-width: 813px) {\
        .language span::after {\
            top: 86%;\
            left: 40%;\
        }\
    }\
    @media (max-width: 767px) {\
        .language span::after {\
            left: 44%;\
            top: 75%;\
        }\
    }\
    @media (max-width: 652px) {\
        .language span::after {\
            left: 43%;\
        }\
    }\
    @media (max-width: 575px) {\
        .language span::after {\
            left: 42%;\
        }\
    }\
    @media (max-width: 471px) {\
        .language span::after {\
            top: 80%;\
            left: 41%;\
        }\
    }\
    @media (max-width: 449px) {\
        .language span::after {\
            left: 40%;\
        }\
    }\
    @media (max-width: 406px) {\
        .language span::after {\
            top: 86%;\
            left: 40%;\
        }\
    }\
    @media (max-width: 358px) {\
        .language span::after {\
            top: 85%;\
            left: 38%;\
        }\
    }\
</style>\
'