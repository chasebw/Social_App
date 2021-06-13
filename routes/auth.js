const express = require('express')
const authController = require('../controllers/auth')
const { check, body } = require('express-validator/check')
const User = require('../models/user')
const multer = require('multer')

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
                return Promise.reject(`This username is already in use.`)
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

router.post('/changePassword',
[ body('password', 'The Password must be at least 4 characters and be alphanumeric.').isLength({min:4}).isAlphanumeric().trim(),
  body('confirmPassword').trim().custom((value, {req}) => {
    if (value !== req.body.password)
    {
        throw new Error("Passwords must match.")
    }
    return true
})
],
 authController.changePassword)


 const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => { cb(null,'./images') },
    filename: (req, file, cb) => { cb(null, new Date().toISOString().replace(/:/g, '-') + "-" + file.originalname) }
  })
  
  const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg')
    {
      cb(null, true)
    }
    else 
    {
      cb(null, false)
    }
  } 

const pictureUpload = multer({
    storage: fileStorage,
    fileFilter: fileFilter
  })

router.post('/changeProfilePicture', pictureUpload.single("profile_picture"), authController.changeProfilePicture)

router.post('/changeEmail',
[check('email').isEmail().withMessage("Please Enter a Valid Email.").normalizeEmail()], 
authController.changeEmail)

router.post('/getUser', authController.getUser)

module.exports = router;