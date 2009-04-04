// Version 1.0!
// 2009-03-19
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
// select "Github", and click Uninstall.
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @name          Github Copy-Pull-Commands
// @description   Make Github's "Copy link" buttons copy the whole clone-command
// @include       http://github.com/*
// ==/UserScript==

var allEmbeds = document.getElementsByTagName('embed');

for(var i = 0; i < allEmbeds.length; i++) {
  var thisEmbed = allEmbeds[i];

  if(thisEmbed.getAttribute('flashvars') != undefined) {
	var parent = thisEmbed.parentNode;
	parent.removeChild(thisEmbed);

	var str = thisEmbed.getAttribute('flashvars');
	var pos = str.indexOf('=') + 1;
	var prefixString = str.substr(0, pos);
	var cloneUrl = str.substr(pos);
	
	var newText = prefixString + "git clone " + cloneUrl;
	thisEmbed.setAttribute('flashvars', newText);

	parent.appendChild(thisEmbed);
  }
}
