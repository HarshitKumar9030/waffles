function toggleFAQ(element) {
    // close other faw items
    const allFaqItems = document.querySelectorAll('.faq__item');
    allFaqItems.forEach(item => {
        if (item !== element.parentElement && item.classList.contains('active')) {
            item.classList.remove('active');
        }
    });
    
    element.parentElement.classList.toggle('active');
}

let currentSlideIndex = 0;
const slides = document.querySelectorAll('.gallery__slide');
const slidesToShow = 2; // no of slides shown at once

function initGallery() {
    // hide all slides except the first two initially
    slides.forEach((slide, index) => {
        if (index >= slidesToShow) {
            slide.style.display = 'none';
        }
    });
}

function changeSlide(direction) {
    let newIndex = currentSlideIndex + direction;
    
    if (newIndex < 0) {
        newIndex = slides.length - slidesToShow;
    } else if (newIndex > slides.length - slidesToShow) {
        newIndex = 0;
    }
    
    // Update which slides are visible
    slides.forEach((slide, index) => {
        if (index >= newIndex && index < newIndex + slidesToShow) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
    
    currentSlideIndex = newIndex;
}

document.addEventListener('DOMContentLoaded', function() {
    initGallery();
    initVariations();
});

// Learn Page JS Functions

function toggleTip(element) {
    const allTipItems = document.querySelectorAll('.tips__item');
    allTipItems.forEach(item => {
        if (item !== element && item.classList.contains('active')) {
            item.classList.remove('active');
        }
    });
    
    element.classList.toggle('active');
}

let currentVariationIndex = 0;
const variationSlides = document.querySelectorAll('.variations__slide');
const variationSlidesToShow = 2; // Number of slides shown at once

function initVariations() {
    if (variationSlides.length === 0) return; // Only run if on learn page
    
    // Hide all slides except the first two initially
    variationSlides.forEach((slide, index) => {
        if (index >= variationSlidesToShow) {
            slide.style.display = 'none';
        }
    });
}

function changeVariationSlide(direction) {
    if (variationSlides.length === 0) return; // Only run if on learn page
    
    let newIndex = currentVariationIndex + direction;
    
    if (newIndex < 0) {
        newIndex = variationSlides.length - variationSlidesToShow;
    } else if (newIndex > variationSlides.length - variationSlidesToShow) {
        newIndex = 0;
    }
    
    // Update which slides are visible
    variationSlides.forEach((slide, index) => {
        if (index >= newIndex && index < newIndex + variationSlidesToShow) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
    
    currentVariationIndex = newIndex;
}

// function playTutorial() {
//     const playButton = document.querySelector('.tutorial__play-button');
//     const placeholder = document.querySelector('.tutorial__placeholder p');
    
//     if (playButton) {
//         playButton.style.transform = 'scale(0.9)';
//         placeholder.textContent = 'Video tutorial coming soon!';
        
//         setTimeout(() => {
//             playButton.style.transform = 'scale(1)';
//             placeholder.textContent = 'Click to watch the waffle making tutorial';
//         }, 300);
//     }
// }
