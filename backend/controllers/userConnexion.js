const User = require('../models/User');

exports.doesUsernameAlreadyExist = (req, res, next) => {
    User.findOne({username: req.body.username})
        .then(response => res.status(200).json({exist: response}))
        .catch(error => res.status(400).json({error}))
};

exports.doesIdentifiersMatches = (req, res, next) => {
    User.findOne({username: req.body.username} && {password: req.body.password})
        .then(response => res.status(200).json({exist: response}))
        .catch(error => res.status(400).json({error}))
};

exports.createNewUser = (req, res, next) => {
    const user = new User({
        ...req.body
    })
    user.save()
        .then(() => res.status(201).json({message: 'user created !'}))
        .catch(error => res.status(400).json({error}));
};