
let dots = document.getElementsByClassName("dot"), 
  slides = document.getElementsByClassName("slide"), timerId, autoTimerId;

showSlide(settings.slide);   // Запуск слайдера

function showSlide(Index) {

    document.querySelector('.slide.active').className = 'slide';
    slides[Index - 1].className += ' active';

    document.querySelector('.dot.active').className = 'dot';
    dots[Index - 1].className += ' active';

    if(!settings.auto) {

        if(timerId) {
            clearInterval(timerId);
            timerId = undefined;
        }
        
        autoTimerId = setTimeout(changeSlide, settings.delay);

    } else timerId = setTimeout(changeSlide, settings.time);
}

// Смена слайда

function changeSlide() {

    if(autoTimerId) {
        clearInterval(autoTimerId);
        autoTimerId = undefined;
    }

    settings.auto = true;
    settings.slide = (settings.slide == slides.length) ? 1 : settings.slide + 1;

    showSlide(settings.slide);
}

// Навигация слайдера

function switchSlide(n, check = 0) {

    settings.auto = false;        // Увеличение времени на просмотр слайда до 10 секунд

    if(autoTimerId) {
        clearInterval(autoTimerId);
        autoTimerId = undefined;
    }

    if(check) {

        let page = settings.slide + n;
        settings.slide = (page == 0) ? slides.length : (page > slides.length ? 1 : page);

    } else settings.slide = n;

    showSlide(settings.slide);
}