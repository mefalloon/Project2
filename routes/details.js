var router = require('express').Router();
const app = require('../server');
const passport = require('passport');
const detail = require('../models/detail');
const event = require('../models/event');

//all details
// router.get('/', async (req,res, next) => {
// res.render('details', {
//     details
// })
// });




// new detail route
router.get('/new', async (req, res) => {
res.send('this is where events can be vieweed')

    // try {
    //    const events = await Event.find({})
    //    const detail = new Detail()
    //    res.render('details/new', {
    //        events: events,
    //        detail: detail
    //    })
    //    } catch {
    //        res.redirect('/details')
    //    }
});

//POST//create route
router.post('/', async (req, res) => {
    res.send('create')
});


module.exports = router;