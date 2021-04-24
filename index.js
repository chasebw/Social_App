const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

//Routes
const data = require('./routes/data')

express()
  .use(express.json())
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.static(path.join(__dirname, 'build')))
  .use('/data', data)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/heroku', (req, res) => res.render('pages/index'))
  .get('/', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

