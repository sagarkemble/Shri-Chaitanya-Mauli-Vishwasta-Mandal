const swiper1 = new Swiper("#slider-1", {
  direction: "horizontal",
  loop: true,
  autoHeight: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

const swiper2 = new Swiper("#slider-2", {
  direction: "horizontal",
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
  },
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
