const express = require('express')
const logger = require('morgan')
const PORT = process.env.PORT || 3000
const NODE_ENV = process.env.NODE_ENV || 'developer'
const gadditRouter = require('./routes/routes')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const app = express()

app.use(logger('dev'))
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.render('./index')
})

app.use('/home', gadditRouter)


app.listen(PORT, () => {
  console.log(`Up on port ${PORT} and running on ${NODE_ENV} environment. `)
})
