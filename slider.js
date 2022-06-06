
let slides = document.getElementsByClassName("slide");
slides[sliderSettings.startIndex - 1].classList.add('slide_active');

let dots = document.getElementsByClassName("dot");
dots[sliderSettings.startIndex - 1].classList.add('dot_active');

let timerId, autoTimerId;
showSlides(sliderSettings.startIndex);

// Запуск слайдера

function showSlides(slideIndex) {

    document.querySelector('.slide_active').classList.remove('slide_active');
    slides[slideIndex-1].classList.add('slide_active');

    document.querySelector('.dot_active').classList.remove('dot_active');
    dots[slideIndex-1].classList.add('dot_active');

    if(sliderSettings.auto == true) {
        timerId = setTimeout(changeSlide, sliderSettings.time);
    } else {

        if(timerId) {
            clearInterval(timerId);
            timerId = undefined;
        }
        
        autoTimerId = setTimeout(changeSlide, sliderSettings.delay);
    }
}

// Смена слайда

function changeSlide() {

    if(autoTimerId) {
        clearInterval(autoTimerId);
        autoTimerId = undefined;
    }

    sliderSettings.auto = true;             // Восстановление нормального времени автосмены слайдов
    sliderSettings.navigationIndex += 1;

    if(sliderSettings.navigationIndex  > sliderSettings.limit) {
        sliderSettings.navigationIndex = 1;
    }

    showSlides(sliderSettings.navigationIndex);
}

// Навигация слайдера

function plusSlides(n) {

    let navigationIndex = sliderSettings.navigationIndex;
    let page = navigationIndex + n;

    sliderSettings.auto = false;        // Увеличение времени на просмотр слайда до 10 секунд

    if(autoTimerId) {
        clearInterval(autoTimerId);
        autoTimerId = undefined;
    }

    if(page > slides.length) {

        sliderSettings.navigationIndex = 1;
        showSlides(1);

    } else if(page == 0) {

        sliderSettings.navigationIndex = slides.length;
        showSlides(slides.length);

    } else {

        sliderSettings.navigationIndex = page;
        showSlides(page);
    }
}

// Дотсы слайдера

function currentSlide(n) {

    sliderSettings.auto = false;        // Увеличение времени на просмотр слайда до 10 секунд

    if(autoTimerId) {
        clearInterval(autoTimerId);
        autoTimerId = undefined;
    }

    sliderSettings.navigationIndex = n;
    showSlides(n);
}