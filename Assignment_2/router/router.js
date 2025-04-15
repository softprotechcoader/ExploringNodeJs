const express = require('express');
const router = express.Router();
const path = require('path'); // import path module

router.get('/', (req, res, next) => {
    // res.send('<h1>This is Assignment 2</h1>');
    res.sendFile(path.join(__dirname ,'../root.html')); // send user.html file
});

router.get('/user', (req, res, next) => {
    // res.send('<h1>Registration Successful</h1>');
    res.sendFile(path.join(__dirname , '..','views','user.html')); // send user.html file
});

module.exports = router;