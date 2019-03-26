(function () {
  var mainMenu = document.querySelector('.main-nav');
  var hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', openHendler);

  function openHendler() {
    mainMenu.classList.toggle('main-nav--active');
    hamburger.classList.toggle('hamburger--active');
  }
})();

(function () {
  $(document).ready(function () {
    $('.reviews-home__list').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    });
  });


  $(document).ready(function () {
    $('.clients-home__list').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 5,
      slidesToScroll: 5,
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
  });

  $(document).ready(function () {
    $('.project-home__list').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    });
  });
})();
