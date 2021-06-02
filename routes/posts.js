const express = require('express')
const router = express.Router()

const postController = require('../controllers/posts')
const isAuth = require('../middleware/isAuth')
const { check, body } = require('express-validator/check')


// /posts/testBackend => POST 
// router.post('/testBackend', postController.testbackend)
router.post('/AllPosts', isAuth, postController.getPosts)

router.post('/addPost',
[
    body('content', "Your post must be at least 5 characters").isLength({min:4}).isString().trim()
]
, isAuth, postController.addPost)

router.get('/:postId', isAuth, postController.getPost)

router.post('/editPost/:postId',
[
    body('content').isLength({min:4}).isString().trim().withMessage("Your post must be at least 5 characters.")
],
isAuth, postController.editPost)

router.post('/deletePost', isAuth, postController.deletePost)
  
module.exports = router
    