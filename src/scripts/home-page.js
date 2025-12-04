const swiper = new Swiper("#slider-1", {
  direction: "horizontal",
  loop: true,
  speed: 1000,
  effect: "fade",
  autoplay: {
    delay: 2500,
  },
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
const swiper2 = new Swiper("#slider-2", {
  direction: "horizontal",
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

const swiper3 = new Swiper("#slider-3", {
  direction: "horizontal",
  loop: true,
  autoHeight: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  centeredSlides: true,
  freeMode: true,
  speed: 6500,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
    waitForTransition: false,
  },
  allowTouchMove: false,

  on: {
    click(swiper) {
      // click ke baad agar ruk gaya ho to fir se chalu karo
      if (!swiper.autoplay.running) {
        swiper.autoplay.start();
      }
    },
    touchEnd(swiper) {
      // kabhi-kabhi touch ke baad bhi pause ho jaata hai
      if (!swiper.autoplay.running) {
        swiper.autoplay.start();
      }
    },
  },
});

function animateCount(el, target) {
  let count = 0;
  const speed = target / 120;

  const update = () => {
    count += Math.ceil(speed);
    if (count >= target) {
      el.textContent = target;
    } else {
      el.textContent = count;
      requestAnimationFrame(update);
    }
  };

  update();
}

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll(".value");
        counters.forEach((counter) => {
          const target = parseInt(counter.getAttribute("data-target"), 10);
          animateCount(counter, target);
        });
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 },
);

const statsContainer = document.querySelector(".stats-container");
if (statsContainer) observer.observe(statsContainer);
