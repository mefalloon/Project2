var router = require('express').Router();
const app = require('../server');
const passport = require('passport');
const details = require('../models/detail')

//all details
router.get('/', function(req,res, next) {

});

// new detail route
router.get('/new', (req, res) => {

});

//POST//create route
router.post('/', async (req, res) => {
});


module.exports = router;