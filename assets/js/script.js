
// Aos Animation Link

AOS.init();

// Navbar Button Collapse

document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('navbar').classList.toggle('active');
});

// header navbar scroll delay

const myDiv = document.querySelector('#header');

function checkScroll() {
    if (window.scrollY > 100) {
        myDiv.classList.add('scrolled');
    } else {
        myDiv.classList.remove('scrolled');
    }
}
window.addEventListener('scroll', checkScroll);

// index servidouble slider

$(document).ready(function(){
  // Initialize the top slider
  $('.top-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.bottom-slider', // Sync with bottom slider
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  // Initialize the bottom slider with different speed
  $('.bottom-slider').slick({
    dots: true,
    infinite: false,
    speed: 500, // Different speed
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.top-slider', // Sync with top slider
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  // Control both sliders with the same buttons
  $('.prev-slide').on('click', function(){
    $('.top-slider').slick('slickPrev');
    $('.bottom-slider').slick('slickPrev');
  });

  $('.next-slide').on('click', function(){
    $('.top-slider').slick('slickNext');
    $('.bottom-slider').slick('slickNext');
  });
});
