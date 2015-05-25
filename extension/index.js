
$(function () {

    console.info('Script running...');

    function loadExtensionScript(src) {
        $('<script>').attr('src', chrome.extension.getURL(src)).appendTo('body').remove();
    }

    loadExtensionScript('jquery.min.js');
    loadExtensionScript('inject.js');
});
