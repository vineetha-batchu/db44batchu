var express = require('express');
var router = express.Router();
const jeep_controlers= require('../controllers/jeep');

/* GET home page. */
router.get('/', jeep_controlers.jeep_view_all_Page );
module.exports = router;