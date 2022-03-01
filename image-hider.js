// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // hide all images
    var iamges = document.getElementsByTagName('img');
    for (let i = 0; i < iamges.length; i += 1) {
        console.log('hiding image');
        iamges[i].style.display = "none";
    }
})();