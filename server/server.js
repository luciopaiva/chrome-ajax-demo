
var
    path = require('path'),
    express = require('express');

express()
    .get('/', function (req, res, next) {

        console.info('Serving index.html...');
        res.sendFile(path.join(__dirname, 'public/index.html'));
    })
    .use('/ajax', function (req, res, next) {

        console.info('AJAX received. Value sent: ' + req.query.count);

        // Necessary when AJAX client is injected in another host's page to enable cross-origin access:
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', '*');
        res.header('Access-Control-Allow-Headers', '*');

        res.end();
    })
    .listen(8888);
