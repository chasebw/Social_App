const Post = require('../models/post')

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

    const content = req.body.content
    const time = req.body.time

    const post = new Post({user: req.user, content: content, time: time})
    .save()
    .then(result => {
        console.log("Created Post")
        res.json({post: post, success: true})
    })
    .catch(err => {
        console.log(err);
        res.json({post: post, success: false})
    }) 
}

exports.getPost = (req, res, next) => {
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

    Post.find()
    .select('content time')
    .populate('user', 'username')
    .then(posts => {
        console.log("Grabbing All Posts")
        console.log(posts)
        res.json({posts: posts, success: true})
    })
    .catch(err => {
        console.log(err);
        res.json({posts:null, success: false})
    }) 
}

exports.editPost = (req, res, next) => {
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
        res.json({success: true, result})
    })
    .catch(err => {
        console.log(err)
    }) 
}

exports.deletePost = (req, res, next) => {
    const postId = req.body.id;
    Post.findByIdAndRemove(postId)
    .then(() => {
        console.log("Deleted Product")
        res.json({"success": true})
    })
    .catch(err => console.log(err))

}