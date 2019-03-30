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
      autoplay: true,
      autoplaySpeed: 6000,
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
      autoplay: true,
      autoplaySpeed: 3000,
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
      autoplay: true,
      autoplaySpeed: 6000,
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


  $('.certificate__slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.certificate__slider-nav',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false
        }
        }
      ]
  });
  $('.certificate__slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.certificate__slider-for',
    arrows: false,
    centerMode: true,
    focusOnSelect: true
  });
  
  
  
  $(document).ready(function () {
    $('.pagination-projects').slick({
      infinite: true,
      slidesToShow: 10,
      slidesToScroll: 10,
      arrows: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            arrows: false
          }
        }
      ]
    });
  });
})();
