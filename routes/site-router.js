"use strict";

const SiteController = require('../controllers/site-controller.js'),
    express = require('express'),
    router = express.Router(),
    pc = new SiteController();

router
    .get('/', pc.getSite);

module.exports = router;