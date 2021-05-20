//selectric start

$('.select-ege, .select-institution, .select-faculty, .select-city, .select-courses, .select-city-courses, .filter-price__select').selectric({
  disableOnMobile: false,
  nativeOnMobile: false,

  onOpen: function() {
    $('.selectric-main-catalog__list .selectric-items').fadeIn()
  },

  onClose: function() {
    $('.selectric-main-catalog__list .selectric-items').fadeOut()
  }
});
//selectric end

//footer details start

const detailsBtn = document.querySelector('.store__btn-details');
const detailsHiddenMobile = document.querySelector('.store__hidden-mobile');

detailsBtn.addEventListener('click', () => {
  detailsHiddenMobile.classList.toggle('hide');
  if (detailsBtn.innerText === 'Читать подробнее') {
    detailsBtn.innerText = 'Скрыть';
  } else {
    detailsBtn.innerText = 'Читать подробнее';
  }
})

//footer details end

//burger btn start

const burgerBtn = document.querySelector('.header__mobile-btn');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('close');
  menu.classList.toggle('active');
  body.classList.toggle('scroll');
})

//burger btn end

//mobile menu bottom start

const mobileBottomMenu = document.querySelector('.mobile-bottom-menu');
const btnFaculties = document.querySelector('.mobile-bottom-menu__btn-faculties');
const btnFilters = document.querySelector('.mobile-bottom-menu__btn-filters');
const menuFaculties = document.querySelector('.mobile-bottom-menu__faculties');
const menuFilters = document.querySelector('.mobile-bottom-menu__filters');
const menuFacultiesClose = document.querySelector('.mobile-bottom-menu__faculties-close');
const menuFiltersClose = document.querySelector('.mobile-bottom-menu__filters-close');

btnFaculties.addEventListener('click', () => {
  btnFilters.classList.remove('active');
  if (!menuFaculties.classList.contains('active')) {
    menuFaculties.classList.add('active');
    body.classList.add('scroll');
    btnFaculties.classList.add('active');
    if (menuFilters.classList.contains('active')) {
      menuFilters.classList.remove('active');
    }
  } else {
    menuFaculties.classList.remove('active');
    body.classList.remove('scroll');
    btnFaculties.classList.remove('active');
  }
});

btnFilters.addEventListener('click', () => {
  btnFaculties.classList.remove('active');
  if (!menuFilters.classList.contains('active')) {
    menuFilters.classList.add('active');
    body.classList.add('scroll');
    btnFilters.classList.add('active');
    if (menuFaculties.classList.contains('active')) {
      menuFaculties.classList.remove('active');
    }
  } else {
    menuFilters.classList.remove('active');
    body.classList.remove('scroll');
    btnFilters.classList.remove('active');
  }
});

menuFacultiesClose.addEventListener('click', () => {
  menuFaculties.classList.remove('active');
  body.classList.remove('scroll');
  btnFaculties.classList.remove('active');
});

menuFiltersClose.addEventListener('click', () => {
  menuFilters.classList.remove('active');
  body.classList.remove('scroll');
  btnFilters.classList.remove('active');
});

window.addEventListener('scroll', function(e) {
  if (window.pageYOffset > 600) {
    mobileBottomMenu.classList.add('active');
  } else {
    mobileBottomMenu.classList.remove('active');
  }
})

//mobile menu bottom end

//pagination start

const paginationBtnPrev = document.querySelector('.pagination__btn-prev');
const paginationBtnNext = document.querySelector('.pagination__btn-next');

function changePrev() {
  if (screen.width < 576) {
    paginationBtnPrev.innerHTML = '<';
    paginationBtnNext.innerHTML = '>';
  } else {
    paginationBtnPrev.innerHTML = 'Предыдущая';
    paginationBtnNext.innerHTML = 'Следующая';
  }
}

function changeNext() {
  if (screen.width > 576) {
    paginationBtnPrev.innerHTML = 'Предыдущая';
    paginationBtnNext.innerHTML = 'Следующая';
  } else {
    paginationBtnPrev.innerHTML = '<';
    paginationBtnNext.innerHTML = '>';
  }
}

window.addEventListener("resize", function() {
  if (paginationBtnPrev && paginationBtnNext) {
    
    if (screen.width < 576) {
      changePrev();
    } 
    if (screen.width >= 576) {
      changeNext();
    }
  }
});
if (paginationBtnPrev && paginationBtnNext) {
  changeNext();
  changePrev();
}

//pagination end

//slider swiper start

const swiperWrapper = document.querySelector('.swiper-wrapper');

if (swiperWrapper) {
  const swiper = new Swiper('.university-slider', {
    // loop: true,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination.swiper-pagination-number',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-university',
      prevEl: '.swiper-button-prev-university',
    },
  });
  
  let fractionCustomCurrent = document.querySelector('.swiper-pagination-fraction-custom-1');
  let fractionCustomSlash = document.querySelector('.swiper-pagination-fraction-custom-2');
  let fractionCustomAll = document.querySelector('.swiper-pagination-fraction-custom-3');
  let newValue;
    for (let i = 0; i < swiper.slides.length; i++){
      if (swiper.slides[i].classList.contains('swiper-slide-active')) {
        newValue = swiper.slides[i];
        let fractionCurrentValue = swiper.slides[i].getAttribute('aria-label');
        fractionCustomCurrent.innerHTML = swiper.slides[i].getAttribute('aria-label').substr(0,2);
        fractionCustomSlash.innerHTML = swiper.slides[i].getAttribute('aria-label').substr(1,2);
        fractionCustomAll.innerHTML = swiper.slides[i].getAttribute('aria-label').substr(3,4);
      }
    }
  let observer = new MutationObserver(mutationRecords => {
    for (let i = 0; i < swiper.slides.length; i++) {
      if (swiper.slides[i].classList.contains('swiper-slide-active')) {
        fractionCustomCurrent.innerHTML = swiper.slides[i].getAttribute('aria-label').substr(0,2);
        fractionCustomSlash.innerHTML = swiper.slides[i].getAttribute('aria-label').substr(1,2);
        fractionCustomAll.innerHTML = swiper.slides[i].getAttribute('aria-label').substr(3,4);
      }
    }
  });
  observer.observe(newValue, {
    childList: false,
    subtree: false,
    attributes: true,
  });
  
  const galleryThumbs = new Swiper('.gallery-thumbs', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 9,
    // freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      768: {
        direction: 'vertical',
      },
    },
  });
  
  const galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 40,
    navigation: {
      nextEl: '.swiper-button-next-gallery',
      prevEl: '.swiper-button-prev-gallery',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });
  
  const swiperComments = new Swiper('.comments-slider', {
    // slidesPerView: 3,
    // centeredSlides: true,
    // spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next-comments',
      prevEl: '.swiper-button-prev-comments',
    },
    breakpoints: {
      1170: {
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 'auto',
        centeredSlides: true,
      },
      280: {
        slidesPerView: 'auto',
        centeredSlides: true,
        // spaceBetween: 20,
      },
    },
  
  });
}


//slider swiper end

/* mask tel start */
let selector = document.querySelectorAll('input[type="tel"]');


let im = new Inputmask({
  mask: "9 999 999 99 999",
  showMaskOnHover: false,
  showMaskOnFocus: true
});
im.mask(selector);

/* mask tel end */