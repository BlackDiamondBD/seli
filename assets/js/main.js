// Language Switcher
const langSwitcherBtn = document.getElementById('lang-switcher__btn');
langSwitcherBtn.addEventListener('click', () => {
    langSwitcherBtn.classList.toggle('active');
});

// Accordion Left Border
const accordionItems = document.querySelectorAll('.accordion-item');
const accordionButtons = document.querySelectorAll('.accordion-button');

function updateAccordionExpandedClasses() {
    accordionItems.forEach((elem) => {
        const button = elem.querySelector('.accordion-button');
        if (button && button.getAttribute('aria-expanded') === 'true') {
            elem.classList.add('expanded');
        } else {
            elem.classList.remove('expanded');
        }
    });
}
updateAccordionExpandedClasses();

accordionButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        setTimeout(() => {
            updateAccordionExpandedClasses();
        }, 10);
    });
});

// Slider For Service cards
var swiper = new Swiper('.service__slider', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1.4,
    centeredSlides: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        580: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2.2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3.5,
        },
        1400: {
            slidesPerView: 3.6,
        },
        1600: {
            slidesPerView: 4,
        },
    },
});

// Slider For Partners cards
var swiper = new Swiper('.partners__slider__active', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 'auto',
    /* autoplay: {
        delay: 1,
    }, */
    speed: 5000,
    992: {
        slidesPerView: 'auto',
        spaceBetween: 25,
    },
    1400: {
        slidesPerView: 'auto',
        spaceBetween: 30,
    },
});
// Slider For Partners cards (Right to Left)
var swiper = new Swiper('.partners__slide__rtl', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 'auto',
    /* autoplay: {
        delay: 1,
        reverseDirection: true,
    }, */
    speed: 5000,
    992: {
        slidesPerView: 'auto',
        spaceBetween: 25,
    },
    1400: {
        slidesPerView: 'auto',
        spaceBetween: 30,
    },
});

// Testimonial Collapse JS
const testimonialWrap = document.getElementById('testimonial__wrapper');
const collapseBtnT = document.getElementById('testimonial-collapse-btn');

collapseBtnT.addEventListener('click', () => {
    testimonialWrap.classList.toggle('active');
});
