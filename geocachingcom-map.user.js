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

  
var filterLegend = document.getElementById('filterLegend');
var allCheckboxes = filterLegend.getElementsByTagName('input');

for (var i = 0; i < allCheckboxes.length; i++) {
    thisBox = allCheckboxes[i];

	//Make it clickable
    thisBox.removeAttribute('disabled');

	//Add the onclick-handler
	thisBox.setAttribute('onclick', 'hideByType(this, true)');
}


unsafeWindow.hideByType = function(e, b) {
    var a, d = unsafeWindow.mrks.length;
    if (e.checked === false) {
        for (a = 0; a < d; a++) {
            if (unsafeWindow.mrks[a].wptTypeId == e.value) {
                unsafeWindow.mrks[a].hide()
            }
        }
    } else {
        for (a = 0; a < d; a++) {
            if (unsafeWindow.mrks[a].wptTypeId == e.value) {
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
