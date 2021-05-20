const express = require('express')
const router = express.Router()

const postController = require('../controllers/posts')
const isAuth = require('../middleware/isAuth')

// /posts/testBackend => POST 
// router.post('/testBackend', postController.testbackend)
router.get('/all', isAuth, postController.getPosts)

router.post('/addPost', isAuth, postController.addPost)

router.get('/:postId', isAuth, postController.getPost)

router.post('/editPost/:postId', isAuth, postController.editPost)

 router.post('/deletePost', isAuth, postController.deletePost)
  
module.exports = router
    