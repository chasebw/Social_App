const express = require('express')
const path = require('path')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
const mongoose = require('mongoose')
const User = require('./models/user')

require('dotenv').config()
const PORT = process.env.PORT || 5000

const store = new MongoDBStore({
  uri: process.env.DATABASE_URL,
  collection: 'sessions'
})
// May need to remove retry rewrites???? - See MongoDB Store Sessions

//Routes
const postRoutes = require('./routes/posts')
const authRoutes = require('./routes/auth')


express()
  .use(express.json())
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.static(path.join(__dirname, 'build')))
  .use(
    session({
  secret: 'SuperSecret',
  resave: false,
  saveUninitialized: false,
  store: store
  })
  )

  .use((req, res, next) => {
    if (!req.session.user) {
      return next();
    }
    User.findById(req.session.user._id)
    .then(user => {
      req.user = user
      next()
    })
    .catch(err => console.log(err))
  })


  .use('/posts', postRoutes)
  .use(authRoutes)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  // TODO Move Items Below Into route and Controller
  .get('/heroku', (req, res) => res.render('pages/index'))
  .get('/', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


mongoose
.connect(process.env.DATABASE_URL)
.then(result => {
  console.log("Database Connected")
})
.catch(err => {
  console.log(err)
})

