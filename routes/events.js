const express = require('express');
const app = require('../server');
const router = express.Router();
const Event = require('../models/event');



// all events route 
router.get('/', async (req, res) => {
    let searchOptions = {}
    // if (req.query.name != null && req.query.name !== '') {
    //     searchOptions.name = new RegExp(req.query.name, 'i')
    // }
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

// new event route
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
      // res.redirect(`authors/${newAuthor.id}`)
      res.redirect('/events')
    } catch {
      res.render('events/new', {
        event: event,
        errorMessage: 'Error creating Author'
      })
    }
  })

  router.delete('/:id', async(req, res) => {
    console.log("in delete")
    Event.findOne({'_id': req.params.id}, function(err, event){
      console.log("need to find")
      console.log(event)
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