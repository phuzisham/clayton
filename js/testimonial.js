
$(window).load(function(){
  if($(window).width() > 767){
    var imageHeight = $('.majorTestimonial .testimonialImage').height();
    var textHeight = $('.majorTestimonial .row').height();
    if(imageHeight < textHeight)
    $('.testimonialImage img').css('margin', '50px 0 50px 0');
  }
});
