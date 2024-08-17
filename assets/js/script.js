let timeoutId;

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const bannerHeight = document.querySelector('.banner').offsetHeight;

    if (timeoutId) {
        clearTimeout(timeoutId); // Clear any existing timeout
    }

    timeoutId = setTimeout(() => {
        if (window.scrollY > bannerHeight) {
            header.style.backgroundColor = '#333'; // Change to the desired background color
        } else {
            header.style.backgroundColor = 'transparent';
        }
    }, 10); // Delay in milliseconds (e.g., 200ms)
});




// -----------

const topSlider = document.querySelector('.top-slider .slider');
const bottomSlider = document.querySelector('.bottom-slider .slider');
const topSlides = topSlider.querySelectorAll('.slide');
const bottomSlides = bottomSlider.querySelectorAll('.slide');
const topSlideCount = topSlides.length;
const bottomSlideCount = bottomSlides.length;
const slidesToShow = 4; // Number of slides to show at once
let topIndex = 0;
let bottomIndex = 0;

function updateSlider(slider, index, slideCount, direction) {
    const slideWidth = 100 / slidesToShow; // Adjust width for visible slides
    const offset = -index * slideWidth; // Calculate offset
    slider.style.transform = `translateX(${offset}%)`;
    slider.style.transitionDuration = direction === 'right' ? '0.3s' : '0.7s'; // Adjust timing
}

document.querySelector('.slider-navigation .next-button').addEventListener('click', () => {
    topIndex = (topIndex + 1) % topSlideCount;
    bottomIndex = (bottomIndex + 1) % bottomSlideCount;
    updateSlider(topSlider, topIndex, topSlideCount, 'right');
    updateSlider(bottomSlider, bottomIndex, bottomSlideCount, 'left');
});

document.querySelector('.slider-navigation .prev-button').addEventListener('click', () => {
    topIndex = (topIndex - 1 + topSlideCount) % topSlideCount;
    bottomIndex = (bottomIndex - 1 + bottomSlideCount) % bottomSlideCount;
    updateSlider(topSlider, topIndex, topSlideCount, 'left');
    updateSlider(bottomSlider, bottomIndex, bottomSlideCount, 'right');
});
