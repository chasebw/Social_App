const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const postSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Post', postSchema)


// const mongodb = require('mongodb')

// // Import Function to Connect to Database

// class post {
//     constructor(user, content, time, id) {
//         this.user = user;
//         this.content = content;
//         this.time = time;
//         this._id = id ? new mongodb.ObjectId(id) : null;
//         //Todo Add image url
//     }

//     save() {
//         const db = getDb()
//         let dbOp;
//         if (this._id) {
//             // Update Product if we have the ID
//             dbOp = db.collection('posts').updateOne({_id: this._id }, {$set: this})
//         }
//         else
//         {
//             // Otherwise Add post
//             dbOp = db.collection('posts').insertOne(this);
//         }

//         return dbOp
//         .then(result => {
//             //console.log(result)
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     } // Save End

//     static fetchAll() {
//         const db = getDb()
//         // Maybe use find().toArray();
//         // find() cursor // We should use pagination?
//         return db
//             .collection('posts')
//             .find()
//             .toArray()
//             .then(posts => {
//                 console.log(posts)
//                 return posts
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }

//     // Note you must use the mongodb ObjectID because the value stored in the database is of that type
//     static findById(postId) {
//         const db = getDb();
//         return db.collection('posts')
//         .find({ _id: new mongodb.ObjectId(postId)})
//         .next()
//         .then(post => {
//             console.log(post)
//             return post;
//         })
//         .catch(err => console.log(err))
//     }

//     static deleteById(postId) {
//         const db = getDb();
//         return db.collection('posts').deleteOne({_id: new mongodb.ObjectId(postId)})
//         .then(result => {
//             console.log("Deleted Item")
//         })
//         .catch( err => {
//             console.log(err)
//         })
//     }
// }

// module.exports = post;
