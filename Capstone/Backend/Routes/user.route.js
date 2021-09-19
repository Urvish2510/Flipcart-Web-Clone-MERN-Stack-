const express = require('express');
const router = express.Router();

const {
    signup, 
    signin
} = require('../Controllers/user.controller');

const {
    validateSignUpRequest,
    validateSignInRequest,
    isRequestCorrect
} = require('../validators/user.validator')


router.post('/signup', validateSignUpRequest, isRequestCorrect, signup);
router.post('/signin', validateSignInRequest, isRequestCorrect, signin);

module.exports = router;

// validateSignUpRequest, isRequestCorrect,