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
                    <a href="index.html#promo" class="toplink__item">home</a>\
                    <a href="cities.html" class="toplink__item" style="padding: 0 10px">cities</a>\
                    <a href="request.html" class="toplink__item">for driver</a>\
                </div>\
                <div class="sublink">\
                    <a href="#" class="sublink__item">Support</a>\
                    <a href="#" class="sublink__item">Jobs</a>\
                    <a href="#" class="sublink__item">Developers</a>\
                    <a href="#" class="sublink__item">Blog</a>\
                    <a href="#" class="sublink__item">About us</a>\
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
<style>\
    .footer .link .toplink .toplink__item {\
        font-size: 19px;\
    }\
    .footer .link .sublink .sublink__item {\
        font-size: 14px\
    }\
    .language span::after {\
        content: "English";\
        position: absolute;\
        color: #1FABC7;\
        left: 45%;\
        top: 75%;\
        width: 0%;\
        height: 0%;\
        z-index: 3;\
    }\
\
    @media (max-width: 1200px){\
        .language span::after {\
            left: 44%;\
        }\
    }\
    @media (max-width: 930px) {\
        .language span::after {\
            left: 42%;\
        }\
    }\
    @media (max-width: 767px) {\
        .language span::after {\
            left: 45%;\
        }\
    }\
    @media (max-width: 575px) {\
        .language span::after {\
            left: 44%;\
        }\
    }\
    @media (max-width: 500px) {\
        .language span::after {\
            left: 43%;\
        }\
    }\
    @media (max-width: 500px) {\
        .language span::after {\
            left: 42%;\
        }\
    }\
    @media (max-width: 358px) {\
        .language span::after {\
            top: 78%;\
            left: 41%;\
        }\
    }\
</style>\
'