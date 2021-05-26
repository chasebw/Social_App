const express = require('express')
const authController = require('../controllers/auth')
const { check, body } = require('express-validator/check')
const User = require('../models/user')

const router = express.Router()

router.post('/login',
[
    body('username', "Usernames are AlphaNumeric and have a minimum length of 4.").isAlphanumeric().isLength({min:4})
    .trim(),
    body('password', "Passwords are AlphaNumeric and have a minimum length of 4.").isAlphanumeric().isLength({min:4})
    .trim()
]
, authController.postLogin)

router.post('/logout', authController.postLogout)

router.post('/signup', 
[
    check('email').isEmail().withMessage("Please Enter a Valid Email.").normalizeEmail(),
    body('password', 'The Password must be at least 4 characters and be alphanumeric.').isLength({min:4}).isAlphanumeric().trim(),
    body('username', 'The Username must be at least 4 characters and be alphanumeric.').isLength({min:4}).isAlphanumeric().trim()
    .custom((value, { req }) => {
        return User.findOne({username: value}).then(userDoc => {
            if (userDoc) {
                return Promise.reject(`This username is already in use [${value}].`)
            }
    })
}),
    body('confirmPassword').trim().custom((value, {req}) => {
        if (value !== req.body.password)
        {
            throw new Error("Passwords must match.")
        }
        return true
    })
],
authController.postSignup)

module.exports = router;