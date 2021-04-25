//selectric start

$('.select-ege, .select-institution, .select-faculty, .select-city').selectric({
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
  if (!menuFaculties.classList.contains('active')) {
    menuFaculties.classList.add('active');
    body.classList.add('scroll');
    if (menuFilters.classList.contains('active')) {
      menuFilters.classList.remove('active');
    }
  } else {
    menuFaculties.classList.remove('active');
    body.classList.remove('scroll');
  }
});

btnFilters.addEventListener('click', () => {
  if (!menuFilters.classList.contains('active')) {
    menuFilters.classList.add('active');
    body.classList.add('scroll');
    if (menuFaculties.classList.contains('active')) {
      menuFaculties.classList.remove('active');
    }
  } else {
    menuFilters.classList.remove('active');
    body.classList.remove('scroll');
  }
});

menuFacultiesClose.addEventListener('click', () => {
  menuFaculties.classList.remove('active');
  body.classList.remove('scroll');
});

menuFiltersClose.addEventListener('click', () => {
  menuFilters.classList.remove('active');
  body.classList.remove('scroll');
});

window.addEventListener('scroll', function(e) {
  if (window.pageYOffset > 600) {
    mobileBottomMenu.classList.add('active');
  } else {
    mobileBottomMenu.classList.remove('active');
  }
})

//mobile menu bottom end

// open division start

// const divisionBtn = document.querySelectorAll('.division__details');

// for (let i = 0; i < divisionBtn.length; i++) {
//   divisionBtn[i].addEventListener('click', function() {
//     let parentDivision = this.closest('.division');
//     let divisionWrapper = parentDivision.querySelector('.division__cards-wrapper');
//     divisionWrapper.classList.toggle('open');
//   })
// }
// open division end