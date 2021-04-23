var express = require('express');
var router = express.Router();
const jeep_controlers = require('../controllers/jeep');

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET home page. */
router.get('/', jeep_controlers.jeep_view_all_Page);
router.get('/detail', jeep_controlers.jeep_view_one_Page);
router.get('/create',secured, jeep_controlers.jeep_create_Page);
router.get('/update', secured, jeep_controlers.jeep_update_Page);
router.get('/delete',secured, jeep_controlers.jeep_delete_Page);
module.exports = router;