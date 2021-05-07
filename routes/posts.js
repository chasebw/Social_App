const express = require('express')
const router = express.Router()

const postController = require('../controllers/posts')

// /posts/testBackend => POST 
router.post('/testBackend', postController.testbackend)

router.get('/all', postController.getPosts)

router.post('/addPost', postController.addPost)

router.get('/posts/:postId', postController.getPost)
  
module.exports = router
    