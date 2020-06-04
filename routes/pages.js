//Router moudle
const router = require('express').Router();

//Controller
const PagesController = require('../controllers/pagesController');

//Routes
router.get(`/`, PagesController.show);
router.get(`/about`, PagesController.show);
router.get(`/contact`, PagesController.show);

//export changes
module.exports = router;
