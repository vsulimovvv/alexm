window.addEventListener('DOMContentLoaded', () => {
  // * ===== Mask input
  $('input[type="tel"]').mask('+7 (999) 999-99-99');

  // * ==== Dropdown
  document.addEventListener('click', (e) => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]');
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null)
      return;

    let currentDropdown;
    if (isDropdownButton) {
      currentDropdown = e.target.closest('[data-dropdown]');
      currentDropdown.classList.toggle('active');
    }

    document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove('active');
    });
  });

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.hero__slider');
    new Swiper(sliderEl, {
      pagination: {
        el: document.querySelector('.hero .swiper-pagination'),
        clickable: true,
      },
      navigation: {
        nextEl: document.querySelector('.hero__slider .swiper-button-next'),
        prevEl: document.querySelector('.hero__slider .swiper-button-prev'),
      },
    });
  })();

  // * ===== Custom select
  (function customSelect() {
    const selects = document.querySelectorAll('.select');
    selects.forEach((el) => {
      const select = new Choices(el, {
        itemSelectText: '',
        searchEnabled: false,
      });
    });
  })();

  // * ===== Slider
  (function sliderWorks() {
    const sliderEl = document.querySelectorAll('.advice__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        pagination: {
          el: document.querySelector('.advice__content .swiper-pagination'),
          type: 'progressbar',
        },
        slidesPerView: 'auto',
        spaceBetween: 15,
        navigation: {
          nextEl: document.querySelector('.advice__slider .swiper-button-next'),
          prevEl: document.querySelector('.advice__slider .swiper-button-prev'),
        },
      });
    });
  })();

  // * ===== Slider
  (function sliderWorks() {
    const sliderEl = document.querySelectorAll('.new-products__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        slidesPerView: 'auto',
        spaceBetween: 15,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    });
  })();

  // * ===== Slider Handle
  (function handlesSlider1() {
    let handlesSlider = document.querySelector('#slider-handles');
    let minStep = document.querySelector('.range-slider__min');
    let maxStep = document.querySelector('.range-slider__max');
    if (handlesSlider) {
      noUiSlider.create(handlesSlider, {
        start: [1400, 1374688],
        connect: true,
        padding: [10, 10],
        range: {
          min: [0],
          max: [2000000],
        },
        format: wNumb({
          decimals: 0,
          thousand: ' ',
          suffix: ' ',
        }),
      });

      handlesSlider.noUiSlider.on('update', function (values, handle) {
        if (handle) {
          maxStep.innerHTML = values[handle];
        } else {
          minStep.innerHTML = values[handle];
        }
      });
    }
  })();

  (function handlesSlider2() {
    let handlesSlider = document.querySelectorAll(
      '.range-slider__range--width'
    );
    let minStep = document.querySelector('.range-slider__min');
    let maxStep = document.querySelector('.range-slider__max');
    // if (handlesSlider) {
    handlesSlider.forEach((el) => {
      noUiSlider.create(el, {
        start: [0, 1000],
        connect: true,
        padding: [10, 10],
        range: {
          min: [0],
          max: [3050],
        },
      });

      el.noUiSlider.on('update', function (values, handle) {
        if (handle) {
          maxStep.innerHTML = values[handle];
        } else {
          minStep.innerHTML = values[handle];
        }
      });
    });
    // }
  })();

  //* Change Background Header
  function scrollHeader() {
    const nav = document.querySelector('header');
    const breadcrumbs = document.querySelector('.breadcrumbs');
    if (breadcrumbs) {
      if (this.scrollY >= 150) {
        nav.classList.add('scroll-header');
        breadcrumbs.style.marginTop = 250 + 'px';
      } else {
        nav.classList.remove('scroll-header');
        breadcrumbs.style.marginTop = 25 + 'px';
      }
    }
  }
  window.addEventListener('scroll', scrollHeader);

  // ! Change
  const header = document.querySelector('header');
  const breadcrumbs = document.querySelector('.breadcrumbs');
  if (breadcrumbs) {
    if (window.pageYOffset >= 150) {
      header.classList.add('scroll-header');
      breadcrumbs.style.marginTop = 250 + 'px';
    }
  }

  // * ==== Single Product
  (function verticalSlider() {
    let mySwiperNav = new Swiper('#slider-nav', {
      slidesPerView: 'auto',
      spaceBetween: 12,
      direction: 'vertical',
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          direction: 'horizontal',
        },
        991: {
          direction: 'vertical',
        },
      },
    });

    let mySwiper = new Swiper('#slider-main', {
      spaceBetween: 10,
      loopedSlides: 4,
      thumbs: {
        swiper: mySwiperNav,
      },
    });
  })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');
    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });
    overlay.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
    menuCloseBtn.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();
  // * ===== Show Filters
  (function showFilters() {
    const menuBtn = document.querySelector('.categories__filter');
    const menu = document.querySelector('.categories__side');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');
    if (menuBtn) {
      menuBtn.addEventListener('click', (e) => {
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('no-scroll');
      });
      overlay.addEventListener('click', (e) => {
        menu.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('no-scroll');
      });
    }
  })();

  // * ===== Accordion

  const toggleAccordion = (accordionControl, accordionContent, accordion) => {
    const filters = document.querySelectorAll(accordionControl);
    filters.forEach((el) => {
      el.addEventListener('click', (e) => {
        const target = e.target.closest(accordion);
        const content = target.querySelector(accordionContent);
        target.classList.toggle('active');
        if (target.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = null;
        }
      });
    });
  };
  toggleAccordion('.accordion__control', '.accordion__content', '.accordion');

  // * ===== Modal
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelectorAll(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');
      if (modalEl) {
        openBtnEl.forEach((el) => {
          el.addEventListener('click', (e) => {
            if (e.target) {
              e.preventDefault();
            }
            modalEl.classList.add('active');
            body.classList.add('no-scroll');
          });
        });
        closeEl.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        });
        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        });
      }
    }
    bindModal('.btn-call', '.popup--call', '.popup__close');
  })();

  // * ===== Toggle Tabs
  function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);
    if (header) {
      hideTabContent();
      showTabContent();
      function hideTabContent() {
        content.forEach((item) => {
          item.classList.remove('active');
        });
        tab.forEach((item) => {
          item.classList.remove(activeClass);
        });
      }
      function showTabContent(i = 0) {
        content[i].classList.add('active');
        tab[i].classList.add(activeClass);
      }
      header.forEach((item) => {
        if (item) {
          item.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains(tabSelector.replace(/\./, ''))) {
              tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                  hideTabContent();
                  showTabContent(i);
                }
              });
            }
          });
        }
      });
    }
  }
  someTabs('.tabs', '.tabs-btn', '.tabs-content', 'tabs-btn--active');

  someTabs(
    '.tabs-hit',
    '.tabs-hit-btn',
    '.tabs-hit-content',
    'tabs-hit-btn--active'
  );

  someTabs(
    '.tabs-discount',
    '.tabs-discount-btn',
    '.tabs-discount-content',
    'tabs-discount-btn--active'
  );
});
