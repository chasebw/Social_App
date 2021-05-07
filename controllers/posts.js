const Post = require('../models/post')

exports.testbackend = (req, res, next) => {
    console.log("Made it Test Backend Route")
    console.log(req.body.topic)
    console.log(req.body.message)

    res.json({
            data: "Data Passed from the server to frontEnd",
            message: "A Message from the server passed to fronend"
    })
}


exports.addPost = (req, res, next) => {

    console.log("Running ServerSide Addpost")

    const user = req.body.user
    const content = req.body.content
    const time = req.body.time

    const post = new Post(user, content, time)
    .save()
    .then(result => {
        console.log("Created Post")
        console.log(result)
        res.json({post: post, success: true})
    })
    .catch(err => {
        console.log(err);
        res.json({post: post, success: false})
    }) 
}

exports.getPost = (req, res, next) => {
    const postId = req.params.postId;
    Post.findById(postId) 
    .then(post => {
        res.json({postId, post})
    })
    .catch(err => console.log(err))
}

exports.getPosts = (req, res, next) => {

    Post.fetchAll()
    .then(posts => {
        console.log("Grabbing All Posts")
        console.log(posts)
        // TODO: Stringify?
        res.json({posts: posts, success: true})
    })
    .catch(err => {
        console.log(err);
        res.json({posts:null, success: false})
    }) 
}