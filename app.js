const express = require('express'), //framework
    routes = require('./routes/site-router'),
    favicon = require('serve-favicon'),
    publicDir = express.static(`${__dirname}/public`),
    viewDir = `${__dirname}/views`,
    port = (process.env.PORT || 3000);

let app = express();

app
    .set('views', viewDir)
    .set('view engine', 'pug')
    .set('port', port)
    .use(publicDir)
    .use(routes);

module.exports = app;
