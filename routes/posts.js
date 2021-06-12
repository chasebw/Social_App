const express = require('express')
const router = express.Router()

const postController = require('../controllers/posts')
const isAuth = require('../middleware/isAuth')
const { check, body } = require('express-validator/check')
const multer = require('multer')



// /posts/testBackend => POST 
// router.post('/testBackend', postController.testbackend)
router.post('/AllPosts', isAuth, postController.getPosts)


const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => { 
    cb(null,`./images`) },
    filename: (req, file, cb) => { cb(null, new Date().toISOString().replace(/:/g, '-') + "-" + file.originalname) }
  })
  
  const fileFilter = (req, file, cb) => {
    if(file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg')
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


router.post('/addPost',
isAuth, pictureUpload.single("postImage"),
[
  body('content', "Your post must be at least 5 characters").isLength({min:5}).isString().trim()
],
postController.addPost)

router.get('/:postId', isAuth, postController.getPost)

router.post('/editPost/:postId',
pictureUpload.single("postImage"),
isAuth,
[
  body('content', "Your post must be at least 5 characters.").isString().isLength({min:5}).trim()
], 
postController.editPost)

router.post('/deletePost', isAuth, postController.deletePost)
  
module.exports = router
    