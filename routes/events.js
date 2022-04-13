const express = require('express');
const app = require('../server');
const router = express.Router();
const Event = require('../models/event');

// const eventsCtrl = require('../controllers/events.js');

//all events route 
router.get('/', async (req, res) => {
    try {
        const events = await Event.find({})
        res.render('events/index', { events: events })
    } catch {
        res.redirect('events/index')
    }
    
});
// new event route
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
module.exports = router;