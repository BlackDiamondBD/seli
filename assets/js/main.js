document.addEventListener("DOMContentLoaded", function () {
  // ===== Language Switcher =====
  const langSwitcherBtn = document.getElementById("lang-switcher__btn");
  if (langSwitcherBtn) {
    langSwitcherBtn.addEventListener("click", () => {
      langSwitcherBtn.classList.toggle("active");
    });
  }

  // ===== Accordion Left Border =====
  const accordionItems = document.querySelectorAll(".accordion-item");
  const accordionButtons = document.querySelectorAll(".accordion-button");

  function updateAccordionExpandedClasses() {
    accordionItems.forEach((elem) => {
      const button = elem.querySelector(".accordion-button");
      if (button && button.getAttribute("aria-expanded") === "true") {
        elem.classList.add("expanded");
      } else {
        elem.classList.remove("expanded");
      }
    });
  }
  updateAccordionExpandedClasses();

  accordionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      setTimeout(updateAccordionExpandedClasses, 10);
    });
  });

  // ===== Testimonial Collapse JS =====
  const testimonialWrap = document.getElementById("testimonial__wrapper");
  const collapseBtnT = document.getElementById("testimonial-collapse-btn");

  if (collapseBtnT && testimonialWrap) {
    collapseBtnT.addEventListener("click", () => {
      testimonialWrap.classList.toggle("active");
    });
  }

  // ===== Slider Activation ===== //

  // Slider For Service cards
  var serviceSwiper = new Swiper(".service__slider", {
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
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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
  var partnersSwiper = new Swiper(".partners__slider__active", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: "auto",
    autoplay: { delay: 1 },
    speed: 5000,
    breakpoints: {
      992: { slidesPerView: "auto", spaceBetween: 25 },
      1400: { slidesPerView: "auto", spaceBetween: 30 },
    },
  });

  // Slider For Partners cards (Right to Left)
  var partnersRtlSwiper = new Swiper(".partners__slide__rtl", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: "auto",
    autoplay: { delay: 1, reverseDirection: true },
    speed: 5000,
    breakpoints: {
      992: { slidesPerView: "auto", spaceBetween: 25 },
      1400: { slidesPerView: "auto", spaceBetween: 30 },
    },
  });

  // Slider for Featured Image (Detail Page)
  var featuredSwiper = new Swiper(".featured--slider", {
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
      el: ".featured__pagination",
      clickable: true,
    },
  });

  // Recommendation Slider (Detail Page)
  var featuredSwiper = new Swiper(".recommendation__slider", {
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

// Dubble Range slider Custom Scripts
document.querySelectorAll(".range-slider").forEach((slider) => {
  const minRange = slider.querySelector(".range-slider__thumb--min");
  const maxRange = slider.querySelector(".range-slider__thumb--max");
  const minValue = slider.querySelector(".range-slider__value--min");
  const maxValue = slider.querySelector(".range-slider__value--max");
  const fill = slider.querySelector(".range-slider__fill");

  function updateValues() {
    let minVal = parseInt(minRange.value);
    let maxVal = parseInt(maxRange.value);

    if (minVal > maxVal) [minVal, maxVal] = [maxVal, minVal];

    minValue.textContent = minVal.toLocaleString();
    maxValue.textContent = maxVal.toLocaleString();

    const minPercent = ((minVal - minRange.min) / (minRange.max - minRange.min)) * 100;
    const maxPercent = ((maxVal - maxRange.min) / (maxRange.max - maxRange.min)) * 100;

    fill.style.left = minPercent + "%";
    fill.style.width = maxPercent - minPercent + "%";
  }

  minRange.addEventListener("input", updateValues);
  maxRange.addEventListener("input", updateValues);

  updateValues();
});
