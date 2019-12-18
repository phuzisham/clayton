if (typeof jQuery != 'undefined') {
  jQuery(document).ready(function () {
    var adx="Events are temporarily unavailable. Please check back later.";
    jQuery.ajax({ dataType: 'script', url: 'https://adminsystems.clayton.edu/adcalendar/EventListSyndicator.aspx?type=N&number=5&category=43-103&adjustmultidayevents=Y&expire=Y&showCanc=Y&adpid=1014&nem=No+events+are+available+that+match+your+request&sortorder=ASC&browser=new&ver=2.0&target=adx042459'
  });setTimeout(function() {if(typeof response=='undefined'){jQuery('#adx042459').html(adx);}}, 5000);
});}else { document.getElementById('adx042459').innerHTML = 'Events are temporarily unavailable because the jQuery library cannot be located.'; }
