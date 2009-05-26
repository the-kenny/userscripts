// ==UserScript==
// @name           Geocaching.com-Map
// @namespace      geocaching
// @include        http://www.geocaching.com/map/*
// ==/UserScript==

//<input id="chkHideFound" type="checkbox" onclick="hideFound(this, true)"/>
document.getElementById('chkHideFound').setAttribute('onclick', 'hideFoundModified(this, true)');

//unsafeWindow provides access to the vars and options from the site scope


unsafeWindow.hideFoundModified = function(e, b) {
    var a, d = unsafeWindow.mrks.length;
    if (e.checked === true) {
        for (a = 0; a < d; a++) {
            if (unsafeWindow.mrks[a].found === true) {
                unsafeWindow.mrks[a].hide()
            }
        }
    } else {
        for (a = 0; a < d; a++) {
            if (unsafeWindow.mrks[a].found === true) {
                if (unsafeWindow.lgnds.byTypeID(unsafeWindow.mrks[a].wptTypeId).visible === true) {
                    unsafeWindow.mrks[a].show()
                }
            }
        }
    }
    if (b) {
        unsafeWindow.updateSideBarList()
    }
}

//<input id="chkHideOwned" type="checkbox" onclick="hideOwned(this,true);"/>
document.getElementById('chkHideOwned').setAttribute('onclick', 'hideOwnedModified(this, true)');

unsafeWindow.hideOwnedModified = function(e, b) {
    var a, d = unsafeWindow.mrks.length;
    if (e.checked === true) {
        for (a = 0; a < d; a++) {
            if (unsafeWindow.mrks[a].owned === true) {
                unsafeWindow.mrks[a].hide()
            }
        }
    } else {
        for (a = 0; a < d; a++) {
            if (unsafeWindow.mrks[a].owned === true) {
                if (unsafeWindow.lgnds.byTypeID(unsafeWindow.mrks[a].wptTypeId).visible === true) {
                    unsafeWindow.mrks[a].show()
                }
            }
        }
    }
    if (b) {
        unsafeWindow.updateSideBarList()
    }
}
