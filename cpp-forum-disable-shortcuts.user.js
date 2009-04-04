// Version 1.0!
// 2009-04-04
// Copyright (c) 2009, Moritz Ulrich (The-Kenny)
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
//
// --------------------------------------------------------------------
//
// This is a Greasemonkey user script.  To install it, you need
// Greasemonkey 0.3 or later: http://greasemonkey.mozdev.org/
// Then restart Firefox and revisit this script.
// Under Tools, there will be a new menu item to "Install User Script".
// Accept the default configuration and install.
//
// To uninstall, go to Tools/Manage User Scripts,
// select "Disable-c-plusplus.de-Shortcuts", and click Uninstall.
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @name          Disable-c-plusplus.de-Shortcuts
// @description   Disables the shortcuts in the c-plusplus.de forum.
// @include       http://*c-plusplus.de/forum/*
// ==/UserScript==

var allInputs = document.getElementsByTagName('input');

for(var i = 0; i < allInputs.length; i++) {

  var thisInput = allInputs[i];

  if(thisInput.getAttribute('accesskey') != undefined) {
	thisInput.setAttribute('accesskey', "");
  }
}
