const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema);

// class User {
//     constructor(username, email) {
//         this.username = username;
//         this.email = email;
//     }

//     save() {
//         const db = getDb();
//         return db.collection('users').insertOne(this);
//     }


//     static findById(userID) {
//         const db = getDb();
//         return db
//         .collection('users')
//         .findOne({_id: new ObjectId(userID)})
//     }
// }

// module.exports = User;