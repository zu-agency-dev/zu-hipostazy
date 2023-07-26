import Swiper from 'swiper';
import type { SwiperOptions } from 'swiper/types/swiper-options';

function numberWithZero(num: number) {
  if (num < 10) {
    return '0' + num;
  }
  return num;
}

$('.slider-video-gallery_component').each(function () {
  const totalSlides = numberWithZero($(document).find('.swiper.is-slider-videos').length);
  $('.swiper-number-total').text(totalSlides);

  const categorySwiperOptions: SwiperOptions = {
    slidesPerView: 1,
    speed: 600,
    loop: true,
  };

  const categorySwiper = new Swiper(
    $(document).find('.swiper.is-slider-category')[0],
    categorySwiperOptions
  );

  const bgSwiperOptions: SwiperOptions = {
    slidesPerView: 1,
    speed: 400,
    effect: 'fade',
    allowTouchMove: false,
    thumbs: {
      swiper: categorySwiper,
    },
  };

  const bgSwiper = new Swiper($(document).find('.swiper.is-slider-bg')[0], bgSwiperOptions);

  const textSwiperOptions: SwiperOptions = {
    slidesPerView: 'auto',
    speed: 600,
    loop: true,
  };

  const textSwiper = new Swiper($(document).find('.swiper.is-slider-titles')[0], textSwiperOptions);

  const videoSwiperOptions: SwiperOptions = {
    slidesPerView: 'auto',
    speed: 600,
    loop: true,

    slideToClickedSlide: true,
    keyboard: true,
    centeredSlides: true,
    slideActiveClass: 'is-active',
    thumbs: {
      swiper: bgSwiper,
    },
    navigation: {
      nextEl: $(document).find('.swiper-next')[0],
      prevEl: $(document).find('.swiper-prev')[0],
    },
  };

  const videoSwiper = new Swiper(
    $(document).find('.swiper.is-slider-videos')[0],
    videoSwiperOptions
  );

  // videoSwiper.controller.control = textSwiper;
  // textSwiper.controller.control = videoSwiper;

  videoSwiper.on('slideChange', function (e) {
    const slideNumber = numberWithZero(e.realIndex + 1);
    $('.swiper-number-current').text(slideNumber);
  });
});
