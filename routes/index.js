var express = require('express');
var router = express.Router();

let landing =require('../controllers/landing');
/* GET home page. */
router.get('/', index.landing);

module.exports = router;
