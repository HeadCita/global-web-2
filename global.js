"use strict";
const app = require('./app'),
    server = app.listen(app.get('port'), () => console.log(`WebSite lanzado en http://localhost:${app.get('port')}`));

    