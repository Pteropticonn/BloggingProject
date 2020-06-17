const { home, about, contact } = require('../controllers/PagesController');

//destructure arguments/actions defined in controller
module.exports = router => {
  router.get('/', home);

  router.get('/about', about);

  router.get('/contact', contact)
};
