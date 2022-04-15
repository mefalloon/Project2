const express = require('express');
const app = require('../server');
const router = express.Router();
const Event = require('../models/event');



//GET//All events route 
router.get('/', async (req, res) => {
    let searchOptions = {}
    try {
        const events = await Event.find(searchOptions)
        res.render('events', {
        events
          //  searchOptions: req.query
        })
    } catch {
        res.redirect('events')
    }  
});

//NEW// event route
router.get('/new', (req, res) => {
    res.render('events/new', { event: new Event() })
});

//POST//create route
router.post('/', async (req, res) => {
    const event = new Event({
      name: req.body.name,
      location: req.body.location,
      description:  req.body.description

    })
    try {

      event.save()
      // const newEvent = await event.save()
      res.redirect('/events')
    } catch {
      res.render('events/new', {
        event: event,
        errorMessage: 'Error creating Event'
      })
    }
  })

  router.delete('/:id', async(req, res) => {
  
    Event.findOne({'_id': req.params.id}, function(err, event){
      // const event = eventDocument.id(req.params.id)
      event.remove()
      res.redirect(`/events`)
    })
  })
//this or async
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