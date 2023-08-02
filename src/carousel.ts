import gsap from 'gsap';
import Swiper from 'swiper';
import { Controller, Navigation } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types/swiper-options';

Swiper.use([Controller, Navigation]);

function numberWithZero(num: number) {
  if (num < 10) {
    return '0' + num;
  }
  return num;
}

const fgImageSwiperOptions: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 50,
  centeredSlides: true,
  direction: 'horizontal',
  loop: true,
  allowTouchMove: false,
  effect: 'slide',
  speed: 800,
  parallax: true,
};

const fgImageSwiper: Swiper = new Swiper('.swiper.small', fgImageSwiperOptions);

const bgImageSwiperOptions: SwiperOptions = {
  direction: 'horizontal',
  loop: true,
  keyboard: true,
  allowTouchMove: true,
  followFinger: false,
  effect: 'ease',
  speed: 800,
  controller: {
    control: fgImageSwiper,
    inverse: true,
  },
  navigation: {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next',
  },
  parallax: true,
};

const bgImageSwiper: Swiper = new Swiper('.swiper.main', bgImageSwiperOptions);

fgImageSwiperOptions.initialSlide = bgImageSwiper.slides.length - 3;

function setText() {
  $('.swiper_text').css('transform', 'translateY(100%)');
  $('.swiper_sub').css('opacity', '0');
}

const button = '.section-video_buttons-wrapper';

function setButton() {
  $('.section-video_buttons-wrapper > .link').css({
    opacity: '0',
    display: 'none',
  });
}

$('.swiper_text').first().css('transform', 'translateY(0%)');
$('.swiper_sub').first().css('opacity', '1');

$('.section-video_buttons-wrapper > .link').css({
  opacity: '0',
  display: 'none',
});

$('.section-video_buttons-wrapper > .link').first().css({
  opacity: '1',
  display: 'flex',
  zIndex: '9999',
});

// When scrolling down
bgImageSwiper.on('slideNextTransitionStart', function (e) {
  setText();
  setButton();
  // Text leaving
  const outgoingText = $('.text_item').eq(e.previousIndex - 1);
  gsap.fromTo(
    outgoingText.find('.swiper_text'),
    { y: '0%' },
    { y: '-100%', stagger: { amount: 0.1 }, duration: 0.4, delay: 0 }
  );
  gsap.fromTo(
    outgoingText.find('.swiper_sub'),
    { opacity: 1 },
    { opacity: 0, duration: 0.4, delay: 0 }
  );
  // Text coming in
  const incomingText = $('.text_item').eq(e.realIndex);
  gsap.fromTo(
    incomingText.find('.swiper_text'),
    { y: '100%' },
    { y: '0%', stagger: { amount: 0.1 }, duration: 0.4, delay: 0.6 }
  );
  gsap.fromTo(
    incomingText.find('.swiper_sub'),
    { opacity: 0 },
    { opacity: 1, duration: 0.4, delay: 0.8 }
  );
  const outgoingButton = $(button).eq(e.previousIndex - 1);
  gsap.fromTo(
    outgoingButton.find('.link'),
    { opacity: 1 },
    { display: 'none', opacity: 0, duration: 0.4, delay: 0 }
  );
  const incomingButton = $(button).eq(e.realIndex);
  gsap.fromTo(
    incomingButton.find('.link'),
    { opacity: 0 },
    { display: 'flex', zIndex: '9999', opacity: 1, duration: 0.4, delay: 0.8 }
  );
});

// When scrolling up
bgImageSwiper.on('slidePrevTransitionStart', function (e) {
  setText();
  setButton();
  // Text leaving
  const outgoingText = $('.text_item').eq(e.activeIndex);
  gsap.fromTo(
    outgoingText.find('.swiper_text'),
    { y: '0%' },
    {
      y: '100%',
      stagger: { amount: 0.1, from: 'end' },
      duration: 0.3,
      delay: 0,
    }
  );
  gsap.fromTo(
    outgoingText.find('.swiper_sub'),
    { opacity: 1 },
    { opacity: 0, duration: 0.3, delay: 0 }
  );
  // Text coming in
  const incomingText = $('.text_item').eq(e.realIndex);
  gsap.fromTo(
    incomingText.find('.swiper_text'),
    { y: '-100%' },
    {
      y: '0%',
      stagger: { amount: 0.1, from: 'end' },
      duration: 0.3,
      delay: 0.5,
    }
  );
  gsap.fromTo(
    incomingText.find('.swiper_sub'),
    { opacity: 0 },
    { opacity: 1, duration: 0.3, delay: 0.7 }
  );
  const outgoingButton = $(button).eq(e.activeIndex);
  gsap.fromTo(
    outgoingButton.find('.link'),
    { opacity: 1 },
    { display: 'none', opacity: 0, duration: 0.4, delay: 0 }
  );
  const incomingButton = $(button).eq(e.realIndex);
  gsap.fromTo(
    incomingButton.find('.link'),
    { opacity: 0 },
    { display: 'flex', opacity: 1, duration: 0.4, delay: 0.8 }
  );
});

// Display number for total slide count
const slideLength = numberWithZero($('.youtube-embed').length);
$('.total').text(slideLength);

// Update current slide number to display
bgImageSwiper.on('transitionStart', function (e) {
  const activeNumer = numberWithZero(+e.realIndex + 1);
  $('.current').text(activeNumer);
});

$('.section-video_back-button > .link').css('display', 'none');

let timelineComplete = false;
const tl = gsap.timeline({
  paused: true,
  defaults: {
    ease: 'power1.inOut',
    duration: 1.8,
  },
  onComplete: () => {
    timelineComplete = true;
    gsap.set('.swiper-image-buttons', { opacity: 0, visibility: 'hidden' });
    $('.small-image').addClass('hide');
    $('.section-videos_content').addClass('hide');
    $('.section-video_content-contain').addClass('hide');
    $('.youtube-embed').removeClass('hide');
    $('.youtube-embed').css('pointer-events', 'auto !important');
    $('.section-video_back-button > .link').css('display', 'flex');
  },
});
tl.fromTo('.section-video-image.small-image', { height: '31rem' }, { height: '100rem' });
tl.fromTo('.section-video-image.small-image', { scale: 1 }, { scale: 1.8 }, '<');

$('.scale-button').on('mousedown touchstart', function () {
  tl.timeScale(1);
  tl.play();
  gsap.set('.swiper-prev', { opacity: 0 });
  gsap.set('.swiper-next', { opacity: 0 });
});

$('.scale-button').on('mouseup touchend', function () {
  if (timelineComplete === false) {
    tl.timeScale(2);
    tl.reverse();
    gsap.set('.swiper-prev', { opacity: 1 });
    gsap.set('.swiper-next', { opacity: 1 });
  }
});

$('.section-video_back-button > .link').on('click', function () {
  if (timelineComplete === true) {
    tl.reverse();
    gsap.set('.swiper-image-buttons', { opacity: 1, visibility: 'visible' });
    gsap.set('.swiper-prev', { opacity: 1 });
    gsap.set('.swiper-next', { opacity: 1 });
    gsap.set('.section-video_back-button > .link', { display: 'none' });
    $('.youtube-embed').addClass('hide');
    $('.small-image').removeClass('hide');
    $('.section-videos_content').removeClass('hide');
    $('.section-video_content-contain').removeClass('hide');
  }
});

// function numberWithZero(num: number) {
//   if (num < 10) {
//     return '0' + num;
//   }
//   return num;
// }

// const button = '.section-video_buttons-wrapper';

// function setText() {
//   $('.swiper_text').css('transform', 'translateY(100%)');
//   $('.swiper_sub').css('opacity', '0');
// }

// function setButton() {
//   $('.section-video_buttons-wrapper > .link').css({
//     opacity: '0',
//     display: 'none',
//   });
// }

// $('.swiper_text').first().css('transform', 'translateY(0%)');
// $('.swiper_sub').first().css('opacity', '1');

// $('.section-video_buttons-wrapper > .link').css({
//   opacity: '0',
//   display: 'none',
// });

// $('.section-video_buttons-wrapper > .link').first().css({
//   opacity: '1',
//   display: 'flex',
//   zIndex: '9999',
// });

// // Display number for total slide count
// const slideLength = numberWithZero($('.youtube-embed').length);
// $('.total').text(slideLength);

// $('.section-video_back-button > .link').css('display', 'none');

// let timelineComplete = false;
// const tl = gsap.timeline({
//   paused: true,
//   defaults: {
//     ease: 'power1.inOut',
//     duration: 1.8,
//   },
//   onComplete: () => {
//     timelineComplete = true;
//     gsap.set('.swiper-image-buttons', { opacity: 0, visibility: 'hidden' });
//     $('.small-image').addClass('hide');
//     $('.section-videos_content').addClass('hide');
//     $('.section-video_content-contain').addClass('hide');
//     $('.youtube-embed').removeClass('hide');
//     $('.youtube-embed').css('pointer-events', 'auto !important');
//     $('.section-video_back-button > .link').css('display', 'flex');
//   },
// });
// tl.fromTo('.section-video-image.small-image', { height: '31rem' }, { height: '100rem' });
// tl.fromTo('.section-video-image.small-image', { scale: 1 }, { scale: 1.8 }, '<');

// $('.scale-button').on('mousedown touchstart', function () {
//   tl.timeScale(1);
//   tl.play();
//   gsap.set('.swiper-prev', { opacity: 0 });
//   gsap.set('.swiper-next', { opacity: 0 });
// });

// $('.scale-button').on('mouseup touchend', function () {
//   if (timelineComplete === false) {
//     tl.timeScale(2);
//     tl.reverse();
//     gsap.set('.swiper-prev', { opacity: 1 });
//     gsap.set('.swiper-next', { opacity: 1 });
//   }
// });

// $('.section-video_back-button > .link').on('click', function () {
//   if (timelineComplete === true) {
//     tl.reverse();
//     gsap.set('.swiper-image-buttons', { opacity: 1, visibility: 'visible' });
//     gsap.set('.swiper-prev', { opacity: 1 });
//     gsap.set('.swiper-next', { opacity: 1 });
//     gsap.set('.section-video_back-button > .link', { display: 'none' });
//     $('.youtube-embed').addClass('hide');
//     $('.small-image').removeClass('hide');
//     $('.section-videos_content').removeClass('hide');
//     $('.section-video_content-contain').removeClass('hide');
//   }
// });

// const fgImageSwiperOptions: SwiperOptions = {
//   loop: true,
//   rewind: true,
//   spaceBetween: 50,
//   allowTouchMove: false,
//   effect: 'slide',
//   speed: 800,
// };

// const fgImageSwiper = new Swiper('.swiper.small', fgImageSwiperOptions);

// const bgImageSwiperOptions: SwiperOptions = {
//   loop: true,
//   // keyboard: true,
//   effect: 'ease',
//   speed: 800,
//   controller: {
//     control: fgImageSwiper,
//     inverse: true,
//   },
//   navigation: {
//     prevEl: '.swiper-prev',
//     nextEl: '.swiper-next',
//   },
//   on: {
//     transitionStart(e: Swiper) {
//       const activeNumer = numberWithZero(e.realIndex + 1);
//       $('.current').text(activeNumer);
//     },
//   },
// };

// const bgImageSwiper: Swiper = new Swiper('.swiper.main', bgImageSwiperOptions);

// bgImageSwiper.on('slideNextTransitionStart', function (e: Swiper) {
//   setText();
//   setButton();
//   // Text leaving
//   const outgoingText = $('.text_item').eq(e.previousIndex - 1);
//   gsap.fromTo(
//     outgoingText.find('.swiper_text'),
//     { y: '0%' },
//     { y: '-100%', stagger: { amount: 0.1 }, duration: 0.4, delay: 0 }
//   );
//   gsap.fromTo(
//     outgoingText.find('.swiper_sub'),
//     { opacity: 1 },
//     { opacity: 0, duration: 0.4, delay: 0 }
//   );
//   // Text coming in
//   const incomingText = $('.text_item').eq(e.realIndex);
//   gsap.fromTo(
//     incomingText.find('.swiper_text'),
//     { y: '100%' },
//     { y: '0%', stagger: { amount: 0.1 }, duration: 0.4, delay: 0.6 }
//   );
//   gsap.fromTo(
//     incomingText.find('.swiper_sub'),
//     { opacity: 0 },
//     { opacity: 1, duration: 0.4, delay: 0.8 }
//   );
//   const outgoingButton = $(button).eq(e.previousIndex - 1);
//   gsap.fromTo(
//     outgoingButton.find('.link'),
//     { opacity: 1 },
//     { display: 'none', opacity: 0, duration: 0.4, delay: 0 }
//   );
//   const incomingButton = $(button).eq(e.realIndex);
//   gsap.fromTo(
//     incomingButton.find('.link'),
//     { opacity: 0 },
//     { display: 'flex', zIndex: '9999', opacity: 1, duration: 0.4, delay: 0.8 }
//   );
// });

// bgImageSwiper.on('slideNextTransitionEnd', function (e: Swiper) {
//   setText();
//   setButton();
//   // Text leaving
//   const outgoingText = $('.text_item').eq(e.activeIndex);
//   gsap.fromTo(
//     outgoingText.find('.swiper_text'),
//     { y: '0%' },
//     {
//       y: '100%',
//       stagger: { amount: 0.1, from: 'end' },
//       duration: 0.3,
//       delay: 0,
//     }
//   );
//   gsap.fromTo(
//     outgoingText.find('.swiper_sub'),
//     { opacity: 1 },
//     { opacity: 0, duration: 0.3, delay: 0 }
//   );
//   // Text coming in
//   const incomingText = $('.text_item').eq(e.realIndex);
//   gsap.fromTo(
//     incomingText.find('.swiper_text'),
//     { y: '-100%' },
//     {
//       y: '0%',
//       stagger: { amount: 0.1, from: 'end' },
//       duration: 0.3,
//       delay: 0.5,
//     }
//   );
//   gsap.fromTo(
//     incomingText.find('.swiper_sub'),
//     { opacity: 0 },
//     { opacity: 1, duration: 0.3, delay: 0.7 }
//   );
//   const outgoingButton = $(button).eq(e.activeIndex);
//   gsap.fromTo(
//     outgoingButton.find('.link'),
//     { opacity: 1 },
//     { display: 'none', opacity: 0, duration: 0.4, delay: 0 }
//   );
//   const incomingButton = $(button).eq(e.realIndex);
//   gsap.fromTo(
//     incomingButton.find('.link'),
//     { opacity: 0 },
//     { display: 'flex', opacity: 1, duration: 0.4, delay: 0.8 }
//   );
// });
