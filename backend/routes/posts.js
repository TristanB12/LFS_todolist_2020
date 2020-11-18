const express = require('express');
const router = express.Router();

const postCtrl = require('../controllers/posts');

router.post('/add', postCtrl.addPost);
router.post('/like', postCtrl.likePost);
router.post('/unlike', postCtrl.unlikePost);
router.use('/reset', postCtrl.deleteAllPosts);
router.use('/', postCtrl.sendAllPosts);

module.exports = router;