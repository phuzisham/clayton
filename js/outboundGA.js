/**
* Function that tracks a click on an outbound link in Analytics.
* This function takes a valid URL string as an argument, and uses that URL string
* as the event label. Setting the transport method to 'beacon' lets the hit be sent
* using 'navigator.sendBeacon' in browser that support it.
*/
var trackOutboundLink = function(url) {
   ga('send', 'event', 'outbound', 'click', url, {
     'transport': 'beacon',
     'hitCallback': function(){document.location = url;}
   });
}

    function _gaLt(event) {

        /* If GA is blocked or not loaded then don't track */
        if (!ga.hasOwnProperty("loaded") || ga.loaded != true) {
            return;
        }

        var el = event.srcElement || event.target;

        /* Loop up the DOM tree through parent elements if clicked element is not a link (eg: an image inside a link) */
        while (el && (typeof el.tagName == 'undefined' || el.tagName.toLowerCase() != 'a' || !el.href)) {
            el = el.parentNode;
        }

        /* if a link has been clicked */
        if (el && el.href) {

            var link = el.href;

            /* Only if it is an external link */
            if (link.indexOf(location.host) == -1 && !link.match(/^javascript\:/i)) {
                /* Is target set and not _(self|parent|top)? */
                var target = (el.target && !el.target.match(/^_(self|parent|top)$/i)) ? el.target : false;

                var hbrun = false; // tracker has not yet run

                /* HitCallback to open link in same window after tracker */
                var hitBack = function() {
                    /* run once only */
                    if (hbrun) return;
                    hbrun = true;
                    window.location.href = link;
                };

                /* If target opens a new window then just track */
                if (el.target && !el.target.match(/^_(self|parent|top)$/i)) {
                    ga(
                        "send", "event", "University Outgoing Links", link,
                        document.location.pathname + document.location.search
                    );
                } else {
                    /* send event with callback */
                    ga(
                        "send", "event", "Outgoing Links", link,
                        document.location.pathname + document.location.search, {
                            "hitCallback": hitBack
                        }
                    );

                    /* Run hitCallback if GA takes too long */
                    setTimeout(hitBack, 1000);

                    /* Prevent standard click */
                    event.preventDefault ? event.preventDefault() : event.returnValue = !1;
                }
            }

        }
    }

    /* Attach the event to all clicks in the document after page has loaded */
    var w = window;
    w.addEventListener ? w.addEventListener("load", function() {
        document.body.addEventListener("click", _gaLt, !1)
    }, !1) : w.attachEvent && w.attachEvent("onload", function() {
        document.body.attachEvent("onclick", _gaLt)
    });
