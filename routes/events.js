const express = require('express');
const app = require('../server');
const router = express.Router();
const Event = require('../models/event');

// const eventsCtrl = require('../controllers/events.js');

//all events route 
router.get('/', (req, res) => {
    res.render('events/index')
});


// new eventer route
router.get('/new', (req, res) => {
    res.render('events/new', { event: new Event() })
});

//POST//create route

router.post('/', (req, res) => {
    const event = new Event({
        name: req.body.name
    })
    event.save((err, newEvent) => {
        if (err) {
        res.render('events/new', {
           event: event,
           errorMessage: 'Error creating Event'
        })    
    } else {
        // res.redirect(`events./${newAuthor.id}`)
        res.redirect(`events`)
    }
})
    // res.send('req.body.name')
});
// router.get('/', (req, res) => {
//     const article = [{
//         title: 'test event',
//         createdat: Date.now(),
//         description: 'test description'

//     }]
//         res.render('index', { events: events})
    
// })
// // router.get('/', eventsCtrl.index);
// // router.get('/new',eventsCtrl.new);

module.exports = router;