const Post = require('../models/Post');

exports.addPost = (req, res, next) => {
    const post = new Post({
        ...req.body
    });
    post.save()
    .then(() => res.status(201).json({ message: 'post created'}))
    .catch(error => res.status(400).json({ error }));
};

exports.likePost = (req, res, next) => {
    Post.updateOne({_id: req.body.id}, {stats: req.body.stats, liked: true, _id: req.body.id})
    .then(() => res.status(200).json({message: 'post liked'}))
    .catch(error => res.status(400).json({error}));
};

exports.unlikePost = (req, res, next) => {
    Post.updateOne({_id: req.body.id}, {stats: req.body.stats, liked: false, _id: req.body.id})
    .then(() => res.status(200).json({message: 'post liked'}))
    .catch(error => res.status(400).json({error}));
};

exports.deleteAllPosts = (req, res, next) => {
    Post.deleteMany({ photo: null })
        .then(() => res.status(200).json({message: 'data base reseted'}))
        .catch(error => res.status(400).json({error}));
};

exports.sendAllPosts = (req, res, next) => {
    Post.find()
        .then(posts => res.status(200).json({ posts }))
        .catch(error => res.status(400).json({ error }));
};