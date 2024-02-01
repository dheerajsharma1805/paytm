const express = require('express');
const usersController = require('../controllers/usersControllers');
const { validCredentialMiddleware, validateSignInUser } = require('../auth/middleware');
const router = express.Router();

router.get('/', usersController.getUser);

router.post('/signup',validCredentialMiddleware, usersController.signUpUser)
router.post('/login',validateSignInUser , usersController.signInUser)

// router.get('/:id', usersController.getUserById)

// router.patch('/:id', usersController.patchUser)

// router.delete('/:id', usersController.deleteUser)

module.exports = router;