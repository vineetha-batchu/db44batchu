var express = require('express');
var router = express.Router();
const jeep_controlers= require('../controllers/jeep');

/* GET home page. */
router.get('/', jeep_controlers.jeep_view_all_Page );
router.get('/detail', jeep_controlers.jeep_view_one_Page);
router.get('/create', jeep_controlers.jeep_create_Page);
router.get('/update', jeep_controlers.jeep_update_Page);
router.get('/delete', jeep_controlers.jeep_delete_Page);
module.exports = router;