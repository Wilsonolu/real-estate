const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
ScrollReveal().reveal(".header-container img", {
  duration: 1000,
});

ScrollReveal().reveal(".header-container h1", {
  ...scrollRevealOption,
  duration: 500,
});

ScrollReveal().reveal(".header-container p", {
  ...scrollRevealOption,
  duration: 1000,
});

scrollReveal().reveal(".header-btn", {
  ...scrollRevealOption,
  duration: 1000,
});
ScrollReveal().reveal(".about-image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about-content h3", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about-content .section-header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about-content .section-subheader", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about-content .about-grid", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".contact-image img", {
  ...scrollRevealOption,
  origin: "left",
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
});
