$(document).ready(function(){

$('.search-toggle').on('keypress click',function(e){
		if (e.which === 13 || e.type === 'click') {
			//$(this).blur();
			e.preventDefault();
			$(this).parents('header').toggleClass('search-open');
			//document.getElementById('as_q').focus();
		};
	});
});

//Google Custom Search Code
var imgAltTagsFix = function() {
    $('img.gsc-branding-img').attr("alt", "Google Custom Search Branding");
	$('table.gsc-search-box').attr("role", "presentation");
	$('table.gsc-branding').attr('role', "presentation");
	$('table.gstl_51').attr('role', "presentation");
	$('table.gstl_50').attr('role', "presentation");
	$('table.gstl_50').removeAttr("cellpadding");
	$('table.gstl_50').removeAttr("cellspacing");
	$('table.gstl_51').removeAttr("cellpadding");
	$('table.gstl_51').removeAttr("cellspacing");
	$('table.gstl_51').removeAttr("style");
	$('table.gstl_50').removeAttr("style");
	$('table.gsc-search-box').removeAttr("cellpadding");
	$('table.gsc-search-box').removeAttr("cellspacing");
};
  window.__gcse = {
    callback: imgAltTagsFix

};
(function() {
    var cx = '015047557333351885617:qfxiw9zam7c';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
