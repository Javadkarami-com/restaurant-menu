if ($(".boarding-swiper").length > 0) {
  var swiperBoarding = new Swiper(".boarding-swiper", {
    speed: 1500,
    parallax: true,
    slidesPerView: "auto",
    spaceBetween: 0,
    autoplay: true,
    loop: false,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

if ($(".drink-swiper").length > 0) {
  var swiper4 = new Swiper(".drink-swiper", {
    speed: 1500,
    slidesPerView: "auto",
    spaceBetween: 0,
    observer: true,
    observeParents: true,
    loop: true,
  });
}

if ($(".recomand-swiper").length > 0) {
  var swiperRecomandSwiper = new Swiper(".recomand-swiper", {
    speed: 500,
    parallax: true,
    slidesPerView: 1.1,
    spaceBetween: 10,
    centeredSlides: true,
    observer: true,
    observeParents: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1.5,
      },
    },
  });
}

if ($(".drink-swiper-2").length > 0) {
  var swiperRecomandSwiper = new Swiper(".drink-swiper-2", {
    speed: 500,
    parallax: true,
    slidesPerView: 1.2,
    spaceBetween: 10,
    observer: true,
    observeParents: true,
    loop: true,

    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1.5,
      },
    },
  });
}
if ($(".drink-swiper-3").length > 0) {
  var swiperRecomandSwiper = new Swiper(".drink-swiper-3", {
    speed: 500,
    parallax: true,
    slidesPerView: 2,
    spaceBetween: 12,
    observer: true,
    observeParents: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2.5,
      },
    },
  });
}
if ($(".cate-swiper").length > 0) {
  var swiper4 = new Swiper(".cate-swiper", {
    speed: 1500,
    slidesPerView: "auto",
    spaceBetween: 0,
    observer: true,
    observeParents: true,
  });
}

// carousel single



if ($(".thumbs-sw-pagi").length > 0) {
  var preview = $(".thumbs-sw-pagi").data("preview");
  var spacing = $(".thumbs-sw-pagi").data("space");
  var pagithumbs = new Swiper(".thumbs-sw-pagi", {
    spaceBetween: spacing,
    slidesPerView: preview,
    freeMode: true,
    watchSlidesProgress: true,
  });
}



if ($(".sw-single").length > 0){
  var play = $(".sw-single").data("auto-play");
  var spacing = $(".sw-single").data("space");
  var swiperSingle = new Swiper(".sw-single", {
    spaceBetween: spacing,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    autoplay: play,
    speed: 500,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },

    thumbs: {
      swiper: pagithumbs,
    },
    navigation: {
      clickable: true,
      nextEl: ".nav-prev-single",
      prevEl: ".nav-next-single",
    },
  });
}

