document.addEventListener("DOMContentLoaded", function () {
  document.querySelector('body').classList.add('js-active');
  const menuButton = document.querySelector('.js-menu-button');
  const menuWrapper = document.querySelector('.js-mobile-menu');


  //debounce function - from underscores.js
  function debounce(func, wait, immediate) {
    let timeout;
    return function () {
      const context = this, args = arguments;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  //change menu button and menu based on click status
  function buttonToggle() {
    //toggle menu button active
    if (!menuButton.classList.contains('active')) {
      menuButton.classList.add('active');
      menuButton.setAttribute('aria-expanded', 'true');
    } else {
      menuButton.classList.remove('active');
      menuButton.setAttribute('aria-expanded', 'false');
    }

    //toggle menu active
    if (!menuWrapper.classList.contains('active')) {
      menuWrapper.classList.add('active');
    } else {
      menuWrapper.classList.remove('active');
    }
  }

  function menuClickClose() {
    menuButton.classList.remove('active');
    menuButton.setAttribute('aria-expanded', 'false');
    menuWrapper.classList.remove('active');
  }

  //hide or show menu based on screen size and button status
  const menuWidthCheck = debounce(function () {
    if (window.matchMedia("(min-width: 992px)").matches) {
      if (menuButton.classList.contains('active')) {
        menuButton.classList.remove('active');
        menuButton.setAttribute('aria-expanded', 'false');
      }
      if (menuWrapper.classList.contains('active')) {
        menuWrapper.classList.remove('active');
      }

    }
  }, 250);

  menuWidthCheck();

  menuButton.addEventListener('click', buttonToggle, false);
  menuWrapper.addEventListener('click', menuClickClose, false);
  window.addEventListener("resize", menuWidthCheck, false);
});