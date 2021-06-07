const Post = require('../models/post')
const { validationResult } = require('express-validator/check')

exports.testbackend = (req, res, next) => {
    console.log("Made it Test Backend Route")
    console.log(req.body.topic)
    console.log(req.body.message)

    res.json({
            data: "Data Passed from the server to frontEnd",
            message: "A Message from the server passed to frontend"
    })
}

exports.addPost = (req, res, next) => {
    console.log("Running ServerSide Add post")

    if(!req.user)
    {
        return res.json({success: false, message: "No Valid User to retrieve post.", action: "Add Post"})
    }
    const content = req.body.content
    const page = req.body.page
    const time = req.body.time
    const errors = validationResult(req)

    if(!errors.isEmpty()) 
    {
        return res.status(422).json({success:false, message: errors.array()[0].msg , errors: errors, action: "Add Post" })
    }

    const post = new Post({user: req.user, content: content, time: time, page: page})
    .save()
    .then(result => {
        console.log("Created Post")
        res.json({post: post, success: true, message: "Adding post to page was successful", action: "Add Post"})
    })
    .catch(err => {
        console.log(err);
        res.json({post: post, success: false, message: `Error Caught on server {error}`, action: "Add Post"})
    }) 
}

exports.getPost = (req, res, next) => {

    if(!req.user)
    {
        return res.json({success: false, message: "No Valid User to retrieve post"})
    }

    const postId = req.params.postId;
    console.log(`Grabbing Single Post with ID ${postId}`)

    Post.findById(postId)
    .select('content time')
    .populate('user', 'username')
    .then(post => {
        res.json({postId, post})
        console.log({postId, post})
    })
    .catch(err => console.log(err))
}

exports.getPosts = (req, res, next) => {
    const NUMBER_PER_PAGE = 5
    const page = req.body.page
    const pageNumber = req.body.pageNumber

    let totalPosts


    Post.find({page:page}).countDocuments().then(numPosts => {
        console.log(numPosts)
        totalPosts = numPosts
        return Post.find({page:page})
        .skip((pageNumber - 1) * NUMBER_PER_PAGE)
        .limit(NUMBER_PER_PAGE)
        .select('content time page')
        .populate('user', 'username profilePicture')
    })
    .then(posts => {
        console.log("Grabbing All Posts")
        console.log(posts)
        const newPosts = posts.map(post => {
            if (JSON.stringify(req.user._id) === JSON.stringify(post.user._id)) {
                return {...post._doc, isUserPost: true}
            }
            else {
                return {...post._doc, isUserPost: false}
            }
        })
        console.log(totalPosts)
        res.json({posts: newPosts, success: true, totalPosts:totalPosts})
    })
    .catch(err => {
        console.log(err);
        res.json({posts:null, success: false})
    }) 
}

exports.editPost = (req, res, next) => {

    if(!req.user)
    {
        return res.json({success: false, message: "No Valid User to Edit post"})
    }

    const errors = validationResult(req)
    if(!errors.isEmpty()) 
    {
        return res.status(422).json({success:false, message: errors.array()[0].msg , errors: errors, action: "Edit Post" })
    }

    const updatedUser = req.body.user;
    const updatedContent = req.body.content;
    const updatedTime = req.body.time;
    const _id = req.params.postId;
    
    Post.findById(_id).then(post => {
        post.content = updatedContent
        post.time = updatedTime
        return post.save()
    })
    .then(result => {
        console.log("Updated Post")
        res.json({success: true, result, message: "Edit Post was successful"})
    })
    .catch(err => {
        console.log(err)
        res.json({success: false, result, message: `Edit Post was Unsuccessful error caught ${err}`})
    }) 
}

exports.deletePost = (req, res, next) => {

    if(!req.user)
    {
        return res.json({success: false, message: "No Valid User to Delete post"})
    }

    const postId = req.body.id;
    Post.findByIdAndRemove(postId)
    .then(() => {
        console.log("Deleted Product")
        res.json({"success": true})
    })
    .catch(err => console.log(err))

}