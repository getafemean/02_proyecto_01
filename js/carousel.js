let overlay = document.querySelectorAll('.overlay')[0];
let carousel = document.querySelectorAll('.carousel')[0];
let slides = document.querySelectorAll('.slide');
let images = document.querySelectorAll('.slide img');
let leftArrow = document.querySelectorAll('.left-arrow')[0];
let rightArrow = document.querySelectorAll('.right-arrow')[0];
let counter = 0;

function loadSlides() {
    carousel.style.height = '90vh';

    for (i=0; i < images.length; i++) {
        if (images[i].offsetHeight < carousel.offsetHeight) {
            carousel.style.height = images[i].offsetHeight + 'px';
        }
    }
    for (i=0; i < slides.length; i++) {
        slides[i].style.left = carousel.offsetWidth * -i + 'px';
    }
    setTimeout(function() {
        for (i=0; i < slides.length; i++) {
            slides[i].classList.add('fadein');
        }
    }, 500)
}

function openModal() {
    overlay.style.display = 'block';
    carousel.style.display = 'block';
    loadSlides();
}

function prevSlide() {
    updateArrowsState(-1);
    for(i=0; i < slides.length; i++) {
        slides[i].style.left = slides[i].offsetLeft - carousel.offsetWidth + 'px';
    }
}

function nextSlide() {
    updateArrowsState(1);
    for(i=0; i < slides.length; i++) {
        slides[i].style.left = slides[i].offsetLeft + carousel.offsetWidth + 'px';
    }
}

function updateArrowsState(e) {
    counter += e;
    if (counter === 0) {
        leftArrow.style.display = 'none';
        rightArrow.style.display = 'flex';
    } else if (counter === slides.length - 1) {
        leftArrow.style.display = 'flex';
        rightArrow.style.display = 'none';
    } else {
        leftArrow.style.display = 'flex';
        rightArrow.style.display = 'flex';
    }
    leftArrow.style.pointerEvents = 'none';
    rightArrow.style.pointerEvents = 'none';
    setTimeout(function() {
        leftArrow.style.pointerEvents = 'auto';
        rightArrow.style.pointerEvents = 'auto';
    }, 1000)
}

function closeModal() {
    overlay.style.display = 'none';
    carousel.style.display = 'none';
    counter = 0;
    leftArrow.style.display = 'none';
    rightArrow.style.display = 'flex';
    for (i=0; i < slides.length; i++) {
        slides[i].classList.remove('fadein');
    }
}

window.onresize = closeModal;
