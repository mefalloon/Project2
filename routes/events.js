const express = require('express');
const app = require('../server');
const router = express.Router();
const Event = require('../models/event');

// const eventsCtrl = require('../controllers/events.js');

// router.get('/', (req,res) =>{
//     res.send(`events`)
// })

// all events route 
router.get('/', async (req, res) => {
    let searchOptions = {}
    if (req.query.name != null && req.query.name !== '') {
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try {
        const events = await Event.finds(searchOptions)
        res.render('events/new', {
           events: events,
           searchOptions: req.query
        })
    } catch {
        res.redirect('events')
    }
    
});

// new event route
router.get('/new', (req, res) => {
    res.render('events/new', { event: new Event() })
});
//POST//create route
router.post('/', async (req, res) => {
    const event = new Event({
      name: req.body.name
    })
    try {
      const newEvent = await author.save()
      // res.redirect(`authors/${newAuthor.id}`)
      res.redirect(`events`)
    } catch {
      res.render('events/new', {
        event: event,
        errorMessage: 'Error creating Author'
      })
    }
  })




// router.post('/', (req, res) => {
//     const event = new Event({
//         name: req.body.name
//     })
//     event.save((err, newEvent) => {
//         if (err) {
//         res.render('events/new', {
//            event: event,
//            errorMessage: 'Error creating Event'
//         })    
//     } else {
//         // res.redirect(`events./${newAuthor.id}`)
//         res.redirect(`events`)
//     }
// })
//     // res.send('req.body.name')
// });
module.exports = router;