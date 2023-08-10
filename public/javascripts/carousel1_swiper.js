var swiper = new Swiper(".mySwiper1", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false, 
      },
    loop: true, //ciclo
  });