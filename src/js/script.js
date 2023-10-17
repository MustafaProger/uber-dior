"use strict"

// затемнение и фиксирование заднего фона при выхода меню бургер
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
        $(".request").toggleClass('lock')
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('form');
    const body = document.getElementById('body');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);


        if(error === 0) {
            body.classList.add('_sending');
            let response = await fetch('../../sendmail.php', {
                method: "POST",
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                form.reset();
                body.classList.remove('_sending');
            } else {
                alert('Ошибка');
                body.classList.remove('_sending');
            }
            
        } else {
            alert('Заполните обязательные поля')
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll("._req");

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === "") {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input) {
       return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});

// Получаем select и контейнер для контента
const languageSelect = document.getElementById("language-select");
const contentContainer = document.getElementById("content");

// Получаем имя текущей папки (RU или EN) из URL
const currentFolder = window.location.pathname.split("/")[1];

// Устанавливаем выбранное значение в select в соответствии с текущей папкой
languageSelect.value = currentFolder;

// Функция для загрузки контента на определенном языке
function loadLanguageContent(language) {
    const contentUrl = language + '/cities.html';

    // Используем AJAX или Fetch для загрузки контента
    fetch(contentUrl)
        .then(response => response.text())
        .then(data => {
            contentContainer.innerHTML = data;
        })
        .catch(error => {
            console.error("Ошибка загрузки контента: " + error);
        });
}

// Слушаем событие изменения select
languageSelect.addEventListener("change", function () {
    const selectedLanguage = languageSelect.value;

    // Обновляем URL, чтобы перейти в соответствующую папку и перезагрузить страницу
    window.location.href = '../' + selectedLanguage + '/cities.html';
});

// Загрузка контента при загрузке страницы
loadLanguageContent(currentFolder);