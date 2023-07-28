import gsap from 'gsap';
import Swiper from 'swiper';
import { Controller } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types/swiper-options';

Swiper.use([Controller]);

function numberWithZero(num: number) {
  if (num < 10) {
    return '0' + num;
  }
  return num;
}

const bgImageSwiperOptions: SwiperOptions = {
  // direction: 'horizontal',
  loop: true,
  // keyboard: true,
  // followFinger: false,
  effect: 'ease',
  speed: 800,
  controller: {
    inverse: true,
  },
  navigation: {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next',
  },
};

const bgImageSwiper: Swiper = new Swiper('.swiper.main', bgImageSwiperOptions);

const fgImageSwiperOptions: SwiperOptions = {
  // direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 50,
  // centeredSlides: true,
  // allowTouchMove: false,
  effect: 'slide',
  speed: 800,
  initialSlide: 0, //Number(bgImageSwiper.slides.length) - 1,
};

const fgImageSwiper: Swiper = new Swiper('.swiper.small', fgImageSwiperOptions);
// Link background slider to foreground slider
bgImageSwiper.controller.control = fgImageSwiper;

function setText() {
  $('.swiper_text').css('transform', 'translateY(100%)');
  $('.swiper_sub').css('opacity', '0');
}

function setButton() {
  $('.link').css('display', 'none');
  $('.link').css('opacity', '0');
}

// When scrolling down
bgImageSwiper.on('slideNextTransitionStart', function (e) {
  setText();
  setButton();

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

  const outgoingButton = $('.link').eq(e.previousIndex - 1);
  gsap.fromTo(
    outgoingButton,
    { display: 'block', opacity: 1 },
    { display: 'none', opacity: 0, duration: 0.4, delay: 0 }
  );

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

  const incomingButton = $('.link').eq(e.realIndex);
  gsap.fromTo(
    incomingButton,
    { display: 'none', opacity: 0 },
    { display: 'block', opacity: 1, duration: 0.4, delay: 0.8 }
  );
});

// When scrolling up
bgImageSwiper.on('slidePrevTransitionStart', function (e) {
  setText();
  setButton();

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

  const outgoingButton = $('.link').eq(e.previousIndex - 1);
  gsap.fromTo(
    outgoingButton,
    { display: 'block', opacity: 1 },
    { display: 'none', opacity: 0, duration: 0.3, delay: 0 }
  );

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

  const incomingButton = $('.link').eq(e.realIndex);
  gsap.fromTo(
    incomingButton,
    { display: 'none', opacity: 0 },
    { display: 'block', opacity: 1, duration: 0.3, delay: 0.7 }
  );
});

// Display number for total slide count
const slideLength = numberWithZero(bgImageSwiper.slides.length);
$('.total').text(slideLength);

// Update current slide number to display
bgImageSwiper.on('transitionStart', function (e) {
  const activeNumer = numberWithZero(+e.realIndex + 1);
  $('.current').text(activeNumer);
});

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
    $('.section-video_content').addClass('hide');
    // $('.youtube-embed').removeClass('hide');
  },
});
// tl.fromTo('.section-video-image.small-image', { height: 'currentHeight' }, { height: '' });
tl.fromTo('.section-video-image.small-image', { scale: 1 }, { scale: 1.8 }, '<');

$('.scale-button').on('mousedown touchstart', function () {
  tl.timeScale(1);
  tl.play();
  $('.swiper-prev').css('opacity', '0');
  $('.swiper-next').css('opacity', '0');
});

$('.scale-button').on('mouseup touchend', function () {
  if (timelineComplete === false) {
    tl.timeScale(2);
    tl.reverse();
    $('.swiper-prev').css('opacity', '1');
    $('.swiper-next').css('opacity', '1');
  }
});
