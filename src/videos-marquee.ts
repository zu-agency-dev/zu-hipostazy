import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// MARQUEE POWER-UP
window.addEventListener('DOMContentLoaded', () => {
  // attribute value checker
  function attr(defaultVal: any, attrVal: any) {
    const defaultValType = typeof defaultVal;
    if (typeof attrVal !== 'string' || attrVal.trim() === '') return defaultVal;
    if (attrVal === 'true' && defaultValType === 'boolean') return true;
    if (attrVal === 'false' && defaultValType === 'boolean') return false;
    if (isNaN(Number(attrVal)) && defaultValType === 'string') return attrVal;
    if (!isNaN(Number(attrVal)) && defaultValType === 'number') return +attrVal;
    return defaultVal;
  }
  // marquee component
  $("[tr-marquee-element='component']").each(function () {
    const componentEl = $(this);
    const panelEl = componentEl.find("[tr-marquee-element='panel']");
    const triggerHoverEl = componentEl.find("[tr-marquee-element='triggerhover']");
    const triggerClickEl = componentEl.find("[tr-marquee-element='triggerclick']");
    const verticalSetting = attr(false, componentEl.attr('tr-marquee-vertical'));
    const reverseSetting = attr(false, componentEl.attr('tr-marquee-reverse'));
    const scrollDirectionSetting = attr(false, componentEl.attr('tr-marquee-scrolldirection'));
    const scrollScrubSetting = attr(false, componentEl.attr('tr-marquee-scrollscrub'));
    let speedSetting = attr(100, componentEl.attr('tr-marquee-speed'));
    let moveDistanceSetting = -100;
    let timeScaleSetting = 1;
    let pausedStateSetting = false;

    if (reverseSetting) moveDistanceSetting = 100;

    function getMarqueeTimelineProgress() {
      marqueeTimeline.progress(1);
    }

    const marqueeTimeline = gsap.timeline({
      repeat: -1,
      onReverseComplete: getMarqueeTimelineProgress,
    });

    if (verticalSetting) {
      speedSetting = Number(panelEl.first().height()) / speedSetting;
      marqueeTimeline.fromTo(
        panelEl,
        { yPercent: 0 },
        { yPercent: moveDistanceSetting, ease: 'none', duration: speedSetting }
      );
    } else {
      speedSetting = Number(panelEl.first().width()) / speedSetting;
      marqueeTimeline.fromTo(
        panelEl,
        { xPercent: 0 },
        { xPercent: moveDistanceSetting, ease: 'none', duration: speedSetting }
      );
    }

    const scrubObject = { value: 1 };

    function getScrubObjectValue() {
      marqueeTimeline.timeScale(scrubObject.value);
    }
    ScrollTrigger.create({
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        if (!pausedStateSetting) {
          if (scrollDirectionSetting && timeScaleSetting !== self.direction) {
            timeScaleSetting = self.direction;
            marqueeTimeline.timeScale(self.direction);
          }
          if (scrollScrubSetting) {
            let v = self.getVelocity() * 0.006;
            v = gsap.utils.clamp(-60, 60, v);
            const scrubTimeline = gsap.timeline({
              onUpdate: getScrubObjectValue,
            });
            scrubTimeline.fromTo(
              scrubObject,
              { value: v },
              { value: timeScaleSetting, duration: 0.5 }
            );
          }
        }
      },
    });

    function pauseMarquee(isPausing: boolean) {
      pausedStateSetting = isPausing;
      const pauseObject = { value: 1 };
      function getPauseObjectValue() {
        marqueeTimeline.timeScale(pauseObject.value);
      }
      const pauseTimeline = gsap.timeline({
        onUpdate: getPauseObjectValue,
      });
      if (isPausing) {
        pauseTimeline.fromTo(pauseObject, { value: timeScaleSetting }, { value: 0, duration: 0.5 });
        triggerClickEl.addClass('is-paused');
      } else {
        pauseTimeline.fromTo(pauseObject, { value: 0 }, { value: timeScaleSetting, duration: 0.5 });
        triggerClickEl.removeClass('is-paused');
      }
    }
    if (window.matchMedia('(pointer: fine)').matches) {
      triggerHoverEl.on('mouseenter', () => pauseMarquee(true));
      triggerHoverEl.on('mouseleave', () => pauseMarquee(false));
    }
    triggerClickEl.on('click', function () {
      !$(this).hasClass('is-paused') ? pauseMarquee(true) : pauseMarquee(false);
    });
  });
});
