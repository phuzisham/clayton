// $(window).load(function(){
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
// });

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

// calendar script below

if (typeof jQuery != 'undefined') {
	jQuery(document).ready(function () {
		var adx="Events are temporarily unavailable. Please check back later.";
		jQuery.ajax({ dataType: 'script', url: 'https://adminsystems.clayton.edu/adcalendar/EventListSyndicator.aspx?type=N&number=6&adjustmultidayevents=Y&expire=Y&showCanc=Y&adpid=1015&nem=No+events+are+available+that+match+your+request&sortorder=ASC&browser=new&ver=2.0&target=adx111439'
	});setTimeout(function() {if(typeof response=='undefined'){jQuery('#adx111439').html(adx);}}, 5000);
});}else { document.getElementById('adx111439').innerHTML = 'Events are temporarily unavailable because the jQuery library cannot be located.'; }

// moved from body
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PBTQK7D');

// ----------------------------------------------------------------------

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-17883852-1', 'auto', {'legacyCookieDomain': 'www.clayton.edu'});

var dimensionName = localStorage.getItem('Analytics.Page.PageVariantDimension');

if (dimensionName != undefined && dimensionName != '') { ga('set', dimensionName, 'Default'); }

ga('send', 'pageview');

// ----------------------------------------------------------------------

//<![CDATA[
var theForm = document.forms['Form'];
if (!theForm) {
	theForm = document.Form;
}
function __doPostBack(eventTarget, eventArgument) {
	if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
		theForm.__EVENTTARGET.value = eventTarget;
		theForm.__EVENTARGUMENT.value = eventArgument;
		theForm.submit();
	}
}
//]]>

// ----------------------------------------------------------------------

//<![CDATA[
Sys.WebForms.PageRequestManager._initialize('ScriptManager', 'Form', ['tdnn$ctr137986$View_UP','dnn_ctr137986_View_UP'], [], [], 90, '');
//]]>

// ----------------------------------------------------------------------

$(window).load(function(){
	if($(window).width() > 767){
		var imageHeight = $('.testimonial .testimonialImage').height();
		var textHeight = $('.testimonial .row').height();
		if(imageHeight < textHeight)
		$('.testimonialImage img').css('margin', '65px 0 65px 0');
	}
});

// ----------------------------------------------------------------------

/*<![CDATA[*/
(function() {
	var sz = document.createElement('script'); sz.type = 'text/javascript'; sz.async = true;
	sz.src = '//siteimproveanalytics.com/js/siteanalyze_66357055.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(sz, s);
})();
/*]]>*/

// ----------------------------------------------------------------------

//<![CDATA[
Sys.Application.add_init(function() {
	$create(Sys.UI._UpdateProgress, {"associatedUpdatePanelId":"dnn_ctr137986_View_UP","displayAfter":500,"dynamicLayout":true}, null, null, $get("dnn_ctr137986_View_UP_Prog"));
});
//]]>

// ----------------------------------------------------------------------

$(document).ready(function() {
  // Build array of IDs of videos used in carousels as default behaviour when loading fails
  var dtdVids = ['dtdcampaignvideo'];

  setTimeout(function() {
    for (i = 0; i < dtdVids.length; i++) {
      var vidId = '#' + dtdVids[i];

      $(vidId).load();
    }
  })
})

// ----------------------------------------------------------------------

$(window).load(function(){
  $('.flexslider').flexslider({
    animation: "fade",
    slideshowSpeed: 3500,
    pauseOnAction:true,
    pauseOnHover:true,
    controlNav: false,
    directionNav: true,

    start: function(slider){
      $('body').removeClass('loading');
    }
  });
});
// moved from body
