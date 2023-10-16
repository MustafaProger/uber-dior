document.getElementById("navbar").innerHTML = '\
    <header class="header">\
        <div class="top__header">\
            <div class="container">\
                <div class="header__content">\
                    <div class="logo_without_text"></div>\
                    <div class="header__burger">\
                        <span></span>\
                    </div>\
                    <section class="dark">\
                        <div class="load-flash" style="display: none; visibility: hidden;"></div>\
                        <div class="mode-toggle noselect">\
                            <div class="toggle-switch"></div>\
                        </div>\
                    </section>\
                    <nav class="header__menu">\
                        <ul class="header__list">\
                            <li><a href="index.html#promo" class="header__link">Main</a></li>\
                            <li><a href="yourcar.html" class="header__link">With your car</a></li>\
                            <li><a href="ourcar.html" class="header__link">On company car</a></li>\
                            <li><a href="index.html#condition" class="header__link">Requirements</a></li>\
                            <li class="dropdown navbar">\
                            <a class="header__link" id="header__link"\
                                data-bs-toggle="dropdown" aria-expanded="false"\
                                >Contacts</a>\
                            <ul class="dropdown-menu">\
                                <li><a class="dropdown-item" href="tel:+79680603084">+7 (968) 060-30-84</a></li>\
                                <li><a class="dropdown-item" href="tel:+79680603084">+7 (968) 312-75-22</a></li>\
                                <li><a class="dropdown-item dropdown-item_3" href="tel:+79680603084">+7 (968) 102-87-53</a></li>\
                            </ul>\
                        </li>\
                            <li><a href="request.html" class="header__link">Submit your application</a></li>\
                        </ul>\
                    </nav>\
                </div>\
            </div>\
        </div>\
    </header>\
    <style>\
        .header__link {\
            font-size: 22px;\
        }\
\
        #header__link::after {\
            top: 2px;\
            margin: 10px 0 10px 105px;\
        }\
\
        @media (max-width: 1200px){\
            .header__list li {\
                font-size: 18px;\
            }\
\
            #header__link::after {\
                margin: 7px 0 10px 81px;\
            }\
        }\
\
        @media (max-width: 930px) {\
            #header__link {\
                padding: 0 0 0 10px;\
            }\
            #header__link::after {\
                margin: 19px 0 10px 103px;\
            }\
        }\
\
    </style>\
'