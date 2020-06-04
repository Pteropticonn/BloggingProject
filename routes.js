const router = require('express').Router();

module.exports = () => {
  // Import page routes
  (require('./routes/pages'))(router);

  return router;
};
