const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;

let _db

const mongoConnect = (callback) => {
    MongoClient.connect(process.env.DATABASE_URL)
        .then(
            client => {
                console.log("Successfully Connected to Database!")
                _db = client.db()
                callback()
            })
        .catch(err => {
            console.log(err)
            throw err
        })
}

const getDb = () => {
    if (_db) {
        return _db
    }
    throw 'No database connection found !'
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb