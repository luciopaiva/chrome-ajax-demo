
$(function () {
    var
        local = 'http://localhost:8888/ajax',
        originalFn;

    if (window.hackMe) {

        console.info('Gained access to page\'s isolated world.');

        originalFn = window.hackMe;

        if (originalFn && !originalFn.isHacked) {

            window.hackMe = function () {
                var
                    result = originalFn.apply(null, arguments);

                console.info('hackMe() has been hacked. Sending AJAX request...');

                $.ajax({
                    type: 'GET',
                    url: local,
                    data: {
                        count: result
                    },
                    cache: false
                });

                return result;
            };
            window.hackMe.isHacked = true;
        }
    }
});
