const router = require('express').Router();

// Our resource routes
//exports allows for binding of current logic state and passing to required file. this router is passed to where specified
(require('./routes/pages'))(router);
(require('./routes/blogs'))(router);

module.exports = router;
