var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

/* GET users listing. */
router.get('/contact', userController.index);

router.post('/contact', userController.index_post)

module.exports = router;
