const express = require('express');
const router = express.Router();

const userConnexionCtrl = require('../controllers/userConnexion');

router.post('/signup/username', userConnexionCtrl.doesUsernameAlreadyExist);
router.post('/login', userConnexionCtrl.doesIdentifiersMatches);
router.post('/signup', userConnexionCtrl.createNewUser);

module.exports = router;