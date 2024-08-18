
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

$('.service-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });