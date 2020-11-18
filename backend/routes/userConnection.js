const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.post('/signup/username', (req, res, next) => {
    User.findOne({username: req.body.username})
        .then(response => res.status(200).json({exist: response}))
        .catch(error => res.status(400).json({error}))
});

router.post('/login', (req, res, next) => {
    User.findOne({username: req.body.username} && {password: req.body.password})
        .then(response => res.status(200).json({exist: response}))
        .catch(error => res.status(400).json({error}))
});

router.post('/signup', (req, res, next) => {
    const user = new User({
        ...req.body
    })
    user.save()
        .then(() => res.status(201).json({message: 'user created !'}))
        .catch(error => res.status(400).json({error}));
})

module.exports = router;