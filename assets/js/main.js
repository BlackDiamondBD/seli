document.addEventListener('DOMContentLoaded', function () {

    // ===== Form Check Active Class =====
    // This will add an active class to the parent element of the radio input when it is checked
    const formCheckInputs = document.querySelectorAll('.form-check-input');
    const stepReset = document.querySelectorAll('.step__reset')
    formCheckInputs.forEach((input) => {
        const parent = input.closest('.form-check');
        const grantparent = parent.parentElement;
        if (parent) {
            parent.classList.toggle('active', input.checked);
        }
        input.addEventListener('change', function () {
            if (parent) {
                // Reset the active class on the parent element for inputs
                let allInput = grantparent.querySelectorAll('.form-check-input[type="radio"]');                
                allInput.forEach(element => {   
                    element.closest('.form-check').classList.toggle('active', element.checked);
                });
                // Toggle the active class on the parent element
                parent.classList.toggle('active', input.checked);
            }
        });
    });     


    // step change function
    const stepBox = document.querySelectorAll('.step__container')
    stepBox.forEach(wrap => {
        const navs = wrap.querySelectorAll('.step__nav li')
        const tabs = wrap.querySelectorAll('.step__tab')
        const next = wrap.querySelectorAll('.step__next')
        const back = wrap.querySelectorAll('.step__back')

        const content = wrap.querySelectorAll('.step__content');
        const publish = wrap.querySelectorAll('.step__publish');


        let currentStep = 0; // default step

        // Set the initial active step
        let size = navs.length;

        // update active class from all tabs and navs
        updateStep();
        
        // Set the initial active step
        next.forEach(btn => {
            btn.addEventListener('click', ()=>{                
                if (currentStep < size - 2) {
                    currentStep++;
                    // update active class from all tabs and navs
                    updateStep();
                }else{
                    content.forEach(element => {
                        element.classList.add('d-none')
                    });
                    publish.forEach(element => {
                        element.classList.add('active')
                    });
                }
            })
        });
        // Back button functionality
        back.forEach(btn => {
            btn.addEventListener('click', ()=>{
                if (currentStep > 0) {
                    currentStep--;
                    // update active class from all tabs and navs
                    updateStep();
                }
            })
        });

        // reset step box ========

        content.forEach(ct => {
            const form = ct.querySelector('form');

            // Show reset button when any input has value
            form.addEventListener("input", function () {
                const hasValue = [...form.elements].some(
                    el => el.tagName === "INPUT" && el.value.trim() !== ""
                );
                if (hasValue) {
                    stepReset.forEach(btn => {
                        btn.classList.remove('d-none')
                    });
                    
                }else{
                    stepReset.forEach(btn => {
                        btn.classList.add('d-none')
                    });
                }
            });
        });
        

        stepReset.forEach(btn => {
            btn.addEventListener('click', ()=>{
                currentStep = 0;
                // update active class from all tabs and navs
                updateStep();

                formCheckInputs.forEach((input) => {
                    const parent = input.closest('.form-check');
                    if (parent) {
                        parent.classList.remove('active');
                    }
                });  

                
                setTimeout(() => (btn.classList.add('d-none')), 0);
            })
        });





        // Navigation click functionality
        function updateStep() {
            tabs.forEach(tab => {
                tab.classList.remove('active')             
            });
            for (let i = 0; i < size; i++) {
                if (i > currentStep) {                    
                    navs[i].classList.remove('active')                
                }else{                    
                    navs[i].classList.add('active')      
                }
            }
            navs[currentStep].classList.add('active')
            tabs[currentStep].classList.add('active')
        }
    });

    // ===== Sticky cards =====
    const stickyCardContainer = document.querySelectorAll('.sticky-guild');
    stickyCardContainer.forEach(container => {
        const links = container.querySelectorAll('.sticky-guild__nav li');
        const cards = container.querySelectorAll('.sticky-guild__cards .card');
        const bar = container.querySelectorAll('.progress-bar')

        // when scroll to the corresponding card, active the link
        window.addEventListener('scroll', () => {           

            cards.forEach((card, index) => {
                let top = card.getBoundingClientRect().top + window.scrollY;
                // let bottom = top + card.offsetHeight;
                let scrollY = window.scrollY + window.innerHeight / 2; // Middle of the viewport
                const isVisible = (top < scrollY);

                // If the card is visible in the viewport
                if (isVisible) {
                    // Add active class to the current card and link
                    card.classList.add('active');
                    links[index].classList.add('active');
                    // Update the progress bar
                    bar.forEach(b => {
                        b.style.height = `${(index + 1) / links.length * 100}%`;
                    });

                }else{
                    card.classList.remove('active');
                    links[index].classList.remove('active');
                }
            });
        });

        

        // Click event for links to scroll to the corresponding card
        links.forEach((link, index) => {
            link.addEventListener('click', () => {
                // Scroll to the corresponding card
                const cardTop = cards[index].getBoundingClientRect().top + window.scrollY - window.innerHeight / 2 + cards[index].clientHeight / 2;
                
                
                window.scrollTo({
                    top: cardTop,
                    behavior: 'smooth'
                });
            });
        });

    });





    
    // ===== Phone Input Internationalization =====
    const input = document.querySelector("#phone");
    window.intlTelInput(input, {
        loadUtils: () => import("https://cdn.jsdelivr.net/npm/intl-tel-input@25.3.2/build/js/utils.js"),
    });



    // ===== Language Switcher =====
    const langSwitcherBtn = document.getElementById('lang-switcher__btn');
    if (langSwitcherBtn) {
        langSwitcherBtn.addEventListener('click', () => {
            langSwitcherBtn.classList.toggle('active');
        });
    }

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

    // Slider for Featured Image (Detail Page)
    var featuredSwiper = new Swiper('.featured--slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        grabCursor: true,
        loop: true,
        speed: 800,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            992: {
                slidesPerView: 1,
                spaceBetween: 16,
            },
        },
        pagination: {
            el: '.featured__pagination',
            clickable: true,
        },
    });

    // Recommendation Slider (Detail Page)
    var featuredSwiper = new Swiper('.recommendation__slider', {
        slidesPerView: 1.25,
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
            992: {
                slidesPerView: 3,
            },
        },
    });
});
