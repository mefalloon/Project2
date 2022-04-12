const express = require('express');
const router = express.Router();
// const eventsCtrl = require('../controllers/events.js');

router.get('/', function(req,res, next) {
    res.render('./events')
});
// router.get('/', eventsCtrl.index);
// // router.get('/new',eventsCtrl.new);

module.exports = router;