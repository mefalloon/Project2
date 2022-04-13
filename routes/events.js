const express = require('express');
const app = require('../server');
const router = express.Router();
// const eventsCtrl = require('../controllers/events.js');

//all events route 
router.get('/', (req, res) => {
    res.render('events/index')
});


// new eventer route
router.get('/new', (req, res) => {
    res.render('events/new')
});

//POST//create route

router.post('/', (req, res) => {
    res.send('create')
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