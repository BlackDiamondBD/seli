document.addEventListener('DOMContentLoaded', function () {
    // ===== Language Switcher =====
    const langSwitcherBtn = document.getElementById('lang-switcher__btn');
    if (langSwitcherBtn) {
        langSwitcherBtn.addEventListener('click', () => {
            langSwitcherBtn.classList.toggle('active');
        });
    }

    // ===== Wishlist Button Toggle =====
    const wishlistBtn = document.querySelectorAll('.btn--wishlist');
    wishlistBtn.forEach(function (btn) {
        btn.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });

    // ===== Accordion Left Border =====
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
            setTimeout(updateAccordionExpandedClasses, 10);
        });
    });

    // ===== Testimonial Collapse JS =====
    const testimonialWrap = document.getElementById('testimonial__wrapper');
    const collapseBtnT = document.getElementById('testimonial-collapse-btn');
    if (collapseBtnT && testimonialWrap) {
        collapseBtnT.addEventListener('click', () => {
            testimonialWrap.classList.toggle('active');
        });
    }

    // ===== Dubble Range Slider Custom Scripts =====
    document.querySelectorAll('.range-slider').forEach((slider) => {
        const minRange = slider.querySelector('.range-slider__thumb--min');
        const maxRange = slider.querySelector('.range-slider__thumb--max');
        const minValue = slider.querySelector('.range-slider__value--min');
        const maxValue = slider.querySelector('.range-slider__value--max');
        const fill = slider.querySelector('.range-slider__fill');

        function updateValues() {
            let minVal = parseInt(minRange.value);
            let maxVal = parseInt(maxRange.value);

            if (minVal > maxVal) [minVal, maxVal] = [maxVal, minVal];

            minValue.textContent = minVal.toLocaleString();
            maxValue.textContent = maxVal.toLocaleString();

            const minPercent =
                ((minVal - minRange.min) / (minRange.max - minRange.min)) * 100;
            const maxPercent =
                ((maxVal - maxRange.min) / (maxRange.max - minRange.min)) * 100;

            fill.style.left = minPercent + '%';
            fill.style.width = maxPercent - minPercent + '%';
        }

        minRange.addEventListener('input', updateValues);
        maxRange.addEventListener('input', updateValues);

        updateValues();
    });

    // ===== Scroll Links =====
    const scrollLinks = document.querySelectorAll('.scroll-link');

    // Click & Scroll Smooth + Active Class
    scrollLinks.forEach((link) => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();

                    const headerHeight =
                        document.querySelector('.header--sticky')
                            ?.offsetHeight || 0;

                    const targetPosition = target.offsetTop - headerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth',
                    });

                    scrollLinks.forEach((l) => l.classList.remove('active'));
                    this.classList.add('active');
                }
            }
        });
    });

    // Scroll Event to Update Active Link on Page Scroll
    window.addEventListener('scroll', () => {
        const headerHeight =
            document.querySelector('.header--sticky')?.offsetHeight || 0;
        let scrollPosition = window.scrollY + headerHeight + 1;

        scrollLinks.forEach((link) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                const sectionTop = target.offsetTop;
                const sectionBottom = sectionTop + target.offsetHeight;

                if (
                    scrollPosition >= sectionTop &&
                    scrollPosition < sectionBottom
                ) {
                    scrollLinks.forEach((l) => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    });

    // Wheel Event (optional if you need it)
    window.addEventListener('wheel', () => {
        const headerHeight =
            document.querySelector('.header--sticky')?.offsetHeight || 0;
        let scrollPosition = window.scrollY + headerHeight + 1;

        scrollLinks.forEach((link) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                const sectionTop = target.offsetTop;
                const sectionBottom = sectionTop + target.offsetHeight;

                if (
                    scrollPosition >= sectionTop &&
                    scrollPosition < sectionBottom
                ) {
                    scrollLinks.forEach((l) => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    });

    // CARD-LISTING-PRODUCT-SLIDER
    const swiperCardListing = new Swiper('.swiper', {
        slidesPerView: 1,
        loop: false,
        speed: 600,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.l-next',
            prevEl: '.l-prev',
        },
    });

    // ===== Slider Activation ===== //

    // Slider For Service cards
    var serviceSwiper = new Swiper('.service__slider', {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1.4,
        centeredSlides: true,
        speed: 700,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            580: { slidesPerView: 2 },
            768: { slidesPerView: 2.2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 3.5 },
            1400: { slidesPerView: 3.6 },
            1600: { slidesPerView: 4 },
        },
    });

    // Slider For Partners cards
    var partnersSwiper = new Swiper('.partners__slider__active', {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 'auto',
        autoplay: { delay: 1 },
        speed: 5000,
        breakpoints: {
            992: { slidesPerView: 'auto', spaceBetween: 25 },
            1400: { slidesPerView: 'auto', spaceBetween: 30 },
        },
    });

    // Slider For Partners cards (Right to Left)
    var partnersRtlSwiper = new Swiper('.partners__slide__rtl', {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 'auto',
        autoplay: { delay: 1, reverseDirection: true },
        speed: 5000,
        breakpoints: {
            992: { slidesPerView: 'auto', spaceBetween: 25 },
            1400: { slidesPerView: 'auto', spaceBetween: 30 },
        },
    });

    // Slider for Thumb Image (Detail Page)
    var thumbSwiper = new Swiper('.thumb--slider', {
        loop: true,
        spaceBetween: 15,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
        direction: 'vertical',
    });

    // Slider for Featured Image (Detail Page)
    var featuredSwiper = new Swiper('.featured--slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        grabCursor: true,
        loop: true,
        speed: 800,
        thumbs: { swiper: thumbSwiper },
        breakpoints: {
            992: { slidesPerView: 1, spaceBetween: 16 },
        },
        pagination: {
            el: '.featured__pagination',
            clickable: true,
        },
    });

    // Recommendation Slider (Detail Page)
    var recommendationSwiper = new Swiper('.recommendation__slider', {
        slidesPerView: 1.35,
        spaceBetween: 15,
        grabCursor: true,
        loop: true,
        speed: 800,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            576: { slidesPerView: 1.75 },
            992: { slidesPerView: 1.25 },
            1200: { slidesPerView: 2.25 },
            1600: { slidesPerView: 2.6 },
        },
    });

    // For Horizontal Scroll
    const ScrollingPart = document.querySelectorAll('.scrolling-part');
    ScrollingPart.forEach((section) => {
        let isDown = false;
        let startX;
        let scrollLeft;

        section.addEventListener('mousedown', (e) => {
            isDown = true;
            section.classList.add('active');
            startX = e.pageX - section.offsetLeft;
            scrollLeft = section.scrollLeft;
            section.style.cursor = 'grabbing';
        });

        section.addEventListener('mouseleave', () => {
            isDown = false;
            section.style.cursor = 'grab';
        });

        section.addEventListener('mouseup', () => {
            isDown = false;
            section.style.cursor = 'grab';
        });

        section.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - section.offsetLeft;
            const walk = (x - startX) * 1.5;
            section.scrollLeft = scrollLeft - walk;
        });
    });

    // filter-Options-Open and Close
    const filterToggle = document.getElementById('filterToggle');
    const filterWrapper = document.querySelector('.filter__wrapper');
    const filterClose = document.querySelector('.filter__close');

    filterToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        filterWrapper.classList.toggle('show');
    });

    if (filterClose) {
        filterClose.addEventListener('click', function () {
            filterWrapper.classList.remove('show');
        });
    }

    document.addEventListener('click', function (e) {
        if (
            filterWrapper.classList.contains('show') &&
            !filterWrapper.contains(e.target) &&
            e.target !== filterToggle
        ) {
            filterWrapper.classList.remove('show');
        }
    });
});
