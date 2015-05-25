// ==UserScript==
// @name           AJAX Demo
// @description    Demonstrates how to make an AJAX request from within an extension.
// @include        http://*.*
// @include        https://*.*
// @version        0.1.0
// ==/UserScript==

$(function () {

    console.info('Script running...');

    function loadExtensionScript(src) {
        $('<script>').attr('src', chrome.extension.getURL(src)).appendTo('body').remove();
    }

    loadExtensionScript('jquery.min.js');
    loadExtensionScript('inject.js');
});
