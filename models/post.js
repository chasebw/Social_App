const mongodb = require('mongodb')

// Import Function to Connect to Database
const getDb = require('../util/database').getDb

class post {
    constructor(user, content, time) {
        this.user = user;
        this.content = content;
        this.time = time
        //Todo Add image url
    }

    save() {
        const db = getDb()

        return db.collection('posts')
            .insertOne(this)
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
    } // Save End

    static fetchAll() {
        const db = getDb()
        // Maybe use find().toArray();
        // find() cursor // We should use pagination?
        return db
            .collection('posts')
            .find()
            .toArray()
            .then(posts => {
                console.log(posts)
                return posts
            })
            .catch(err => {
                console.log(err)
            })
    }

    // Note you must use the mongodb ObjectID because the value stored in the database is of that type
    static findById(postId) {
        const db = getDb();
        return db.collection('posts')
        .find({ _id: new mongodb.ObjectId(postId)})
        .next()
        .then(post => {
            console.log(post)
            return post;
        })
        .catch(err => console.log(err))
    }
}

module.exports = post;
