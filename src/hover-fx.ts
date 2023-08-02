import hoverEffect from 'hover-effect';

window.Webflow ||= [];
window.Webflow.push(() => {
  // const block = '.blog-post-link_block';
  const block = '.blog_content-wrapper';
  $(block).each(function () {
    $(this).on('mouseover', () => {
      $(this).find('.blog-slide-bg').addClass('is-active');
      $(this).find('.blog-content-item').addClass('is-active');
      $(this).find('.blog-item_marquee-panel').addClass('is-active');
    });

    $(this).on('mouseout', () => {
      $(this).find('.blog-slide-bg').removeClass('is-active');
      $(this).find('.blog-content-item').removeClass('is-active');
      $(this).find('.blog-item_marquee-panel').removeClass('is-active');
    });
  });

  $(block).on('mouseover', function () {
    if (
      Number($(this).find('.blog-title').first().width()) > Number($('.blog-content-item').width())
    ) {
      $('.blog-item_marquee-panel.is-active').find('.blog-title').removeClass('hide');
      $('.blog-item_marquee-panel.is-active').css({
        animation: 'marquee 90s linear infinite',
      });
    }
  });
  $(block).on('mouseout', function () {
    $('.blog-item_marquee-panel').css('-webkit-animation', 'none');
    $('.blog-item_marquee-panel').css('-moz-animation', 'none');
    $('.blog-item_marquee-panel').css('-ms-animation', 'none');
    $('.blog-item_marquee-panel').css('animation', 'none');
  });

  $(block).each((post) => {
    $('canvas').css({ width: '34%' });
    new hoverEffect({
      parent: $('.blog_content-wrapper')[post],
      intensity: 0.3,
      imagesRatio: 3 / 16,
      image1: $('.blog-visual-image')[post].getAttribute('src'),
      image2: $('.blog-visual-image')[post].getAttribute('src'),
      displacementImage:
        'https://uploads-ssl.webflow.com/649bee0121de1f16fd80cd85/64be8bea7919991859374824_displacement-mask.png',
    });
  });
});
