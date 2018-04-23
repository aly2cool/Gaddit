const express = require('express')
const logger = require('morgan')
const PORT = process.env.PORT || 3000
const NODE_ENV = process.env.NODE_ENV || 'developer'
const ejs = require('ejs')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')
const gadditRouter = require('./routes/routes')
const loginRouter =  require('./routes/loginRouter')
const signup = require('./routes/signup')
const postRouter = require('./routes/postRouter')
const commentsRouter = require('./routes/commentsRouter')
const app = express()

app.use(logger('dev'))
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'))

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'very secret'
}))


app.use('/signup', signup)
app.use('/login', loginRouter)
app.use('/', gadditRouter)
app.use('/index', postRouter)
app.use('/comment', commentsRouter)



app.listen(PORT, () => {
  console.log(`Up on port ${PORT} and running on ${NODE_ENV} environment. `)
})
