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
        // find() cursor
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
}

module.exports = post;
