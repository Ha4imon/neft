(function() {
  var mainMenu = document.querySelector('.main-nav');
  var hamburger = document.querySelector('.hamburger');
  
  hamburger.addEventListener('click', openHendler);
  
  function openHendler() {
    mainMenu.classList.toggle('main-nav--active');
    hamburger.classList.toggle('hamburger--active');
  } 
})();