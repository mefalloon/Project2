var router = require('express').Router();
const app = require('../server');
const passport = require('passport');

router.get('/', function(req,res, next) {
    res.send('hello')
});