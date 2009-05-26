// ==UserScript==
// @name           Geocaching.com-Map
// @namespace      geocaching
// @include        http://www.geocaching.com/map/*
// ==/UserScript==


document.getElementById('chkHideFound').setAttribute('onclick', 'hideFoundModified(this, true)');

//unsafeWindow provides access to the vars and options from the site scope
unsafeWindow.hideFoundModified = function(e, b) {
  mrks = unsafeWindow.mrks;
  lgnds = unsafeWindow.lgnds;


    var a, d = mrks.length;
    if (e.checked === true) {
        for (a = 0; a < d; a++) {
            if (mrks[a].found === true) {
                mrks[a].hide()
            }
        }
    } else {
        for (a = 0; a < d; a++) {
            if (mrks[a].found === true) {
                if (lgnds.byTypeID(mrks[a].wptTypeId).visible === true) {
                    mrks[a].show()
                }
            }
        }
    }
    if (b) {
        unsafeWindow.updateSideBarList()
    }
}

