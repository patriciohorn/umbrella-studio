///////////////////////////////////////
// Swiper
///////////////////////////////////////
const swiper = new Swiper('.swiper__services', {
  loop: true,
  speed: 400,
  lazyLoading: true,
  centerSlide: 'true',
  grabCursor: 'true',
  slidesPerView: 3,
  effect: 'slide',
  spaceBetween: 20, // 100px
  keyboard: {
    enabled: true
  },
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev'
  },

  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1
    },

    // when window width is >= 480px
    480: {
      slidesPerView: 1
    },

    // when window width is >= 640px
    640: {
      slidesPerView: 2
    },

    1100: {
      slidesPerView: 3
    }
  }
});

const swiperTestimonials = new Swiper('.swiper__testimonials', {
  loop: true,
  speed: 400,
  centerSlide: 'true',
  grabCursor: 'true',
  slidesPerView: 2,
  effect: 'slide',
  spaceBetween: 20,
  keyboard: {
    enabled: true
  }, // 100px
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev'
  },

  // Responsive breakpoints
  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1
    },

    // when window width is >= 480px
    480: {
      slidesPerView: 1
    },

    // when window width is >= 640px
    640: {
      slidesPerView: 2
    },

    1100: {
      slidesPerView: 2
    }
  }
});

///////////////////////////////////////
// Mobile Navigation
///////////////////////////////////////

const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', toggleNav);

function toggleNav() {
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else if (visibility === 'true') {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
}

///////////////////////////////////////
// Check elements overflowing
///////////////////////////////////////

// document.querySelectorAll('*').forEach((el) => {
//   if (el.scrollWidth > el.clientWidth) {
//     console.log('Found the worst element ever: ', el);
//   }
// });

///////////////////////////////////////
// Sticky Navigation
///////////////////////////////////////

const header = document.getElementById('header');
// const header = document.querySelector('.main-nav');
const hero = document.getElementById('hero');

function stickyNav(entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
}

const headerObserver = new IntersectionObserver(stickyNav, {
  threshold: 0.5
});

headerObserver.observe(hero);
