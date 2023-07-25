import Swiper from 'swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  function numberWithZero(num: number) {
    if (num < 10) {
      return '0' + num;
    }
    return num;
  }

  $('.slider-video-gallery_component').each(function () {
    const totalSlides = numberWithZero($(this).find('.is-slider-videos').length);
    $('.swiper-number-total').text(totalSlides);

    const bgSwiper = new Swiper($(this).find('.swiper.is-slider-bg')[0], {
      slidesPerView: 1,
      speed: 400,
      effect: 'fade',
      allowTouchMove: false,
    });

    // const categorySwiper = new Swiper($(this).find('.is-slider-category')[0], {
    //   slidesPerView: 1,
    //   speed: 600,
    //   loop: true,
    // });

    // const textSwiper = new Swiper($(this).find('.is-slider-titles')[0], {
    //   slidesPerView: 'auto',
    //   speed: 600,
    //   loop: true,
    // });

    const videoSwiper = new Swiper($(this).find('.is-slider-videos')[0], {
      slidesPerView: 'auto',
      speed: 600,
      loop: true,

      slideToClickedSlide: true,
      keyboard: true,
      centeredSlides: true,
      slideActiveClass: 'is-active',
      // slideDuplicateActiveClass: 'is-active',
      thumbs: {
        swiper: bgSwiper,
      },
      navigation: {
        nextEl: $(this).find('.swiper-next')[0],
        prevEl: $(this).find('.swiper-prev')[0],
      },
    });

    // videoSwiper.controller.control = textSwiper;
    // textSwiper.controller.control = videoSwiper;

    videoSwiper.on('slideChange', function (e) {
      const slideNumber = numberWithZero(e.realIndex + 1);
      $('.swiper-number-current').text(slideNumber);
    });
  });
});
