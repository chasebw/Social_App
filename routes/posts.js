const express = require('express')
const router = express.Router()

const postController = require('../controllers/posts')

// /posts/testBackend => POST 
router.post('/testBackend', postController.testbackend)
  
module.exports = router
    