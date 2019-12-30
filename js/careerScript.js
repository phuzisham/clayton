$(window).load(function(){
  $('.flexslider').flexslider({
    touch: true,
    slideshow: false,
    controlNav: true,
    slideshowSpeed: 7000,
    animationSpeed: 600,
    initDelay: 0,
    start: function(slider) { // Fires when the slider loads the first slide
      var slide_count = slider.count - 1;

      $(slider)
      .find('img.lazy:eq(0)')
      .each(function() {
        var src = $(this).attr('data-src');
        $(this).attr('src', src).removeAttr('data-src');
      });
    },
    before: function(slider) { // Fires asynchronously with each slider animation
      var slides     = slider.slides,
      index      = slider.animatingTo,
      $slide     = $(slides[index]),
      $img       = $slide.find('img[data-src]'),
      current    = index,
      nxt_slide  = current + 1,
      prev_slide = current - 1;

      $slide
      .parent()
      .find('img.lazy:eq(' + current + '), img.lazy:eq(' + prev_slide + '), img.lazy:eq(' + nxt_slide + ')')
      .each(function() {
        var src = $(this).attr('data-src');
        $(this).attr('src', src).removeAttr('data-src');
      });
    },
    after: function(slider){
      slideContentOverflow();
    }
  });
  slideContentOverflow();
});
$(window).resize(function(){
  slideContentOverflow();
});

function slideContentOverflow(){
  if($(window).width() > 767){
    var height = $('.sliderRow .flex-active-slide .slideContent').height() + 62;
    var slide = $('.sliderRow .flex-active-slide').height() / 2;
    if(height > slide){
      $('.sliderRow .contentWidth.no-gutter').css('overflow', 'visible');
      $('.sliderRow .slides li').css('margin-bottom', '0px');
      $('.sliderRow .flex-active-slide').css('margin-bottom', height-slide+65 + 'px');
    }else{
      $('.sliderRow .contentWidth.no-gutter').css('overflow', 'hidden');
      $('.sliderRow .slides li').css('margin-bottom', '0px');
      $('.sliderRow .flex-active-slide').css('margin-bottom', 0 + 'px');
    }
  }
}

if (typeof jQuery != 'undefined') {
  jQuery(document).ready(function () {
    var adx="Events are temporarily unavailable. Please check back later.";
    jQuery.ajax({
      dataType: 'script',
      url: 'https://adminsystems.clayton.edu/adcalendar/EventListSyndicator.aspx?type=N&number=5&category=32-114&adjustmultidayevents=Y&expire=Y&showCanc=Y&adpid=9&nem=No+events+are+available+that+match+your+request&sortorder=ASC&ver=2.0&target=adx032234'
    });

    setTimeout(function() {
      if(typeof response=='undefined')	{
        jQuery('#adx032234').html(adx);
      }
    }, 5000);
  });
}
else {
  document.getElementById('adx032234').innerHTML = 'Events are temporarily unavailable because the jQuery library cannot be located.';
}

$(document).ready(function(){ $('#slidingFeatures').jshowoff({
  effect: 'slideLeft',
  controlText:{play:'Play',pause:'Pause',previous:'<',next:'>'},
  hoverPause: false
}); });

$('#features').jshowoff({ speed:1500, links: false });

// fix pre overflow in IE
(function ($) {
  $.fn.fixOverflow = function () {
    if ($.browser.msie) {
      return this.each(function () {
        if (this.scrollWidth > this.offsetWidth) {
          $(this).css({ 'padding-bottom' : '20px', 'overflow-y' : 'hidden' });
        }
      });
    } else {
      return this;
    }
  };
})(jQuery);
$('pre').fixOverflow();
