const express = require('express')
const gadditController = require('../controllers/gaddit-controller')
const router = express.Router()
const viewsController = require('../controllers/viewsController')
const gadditDB = require('../models/gadditDB')
const bodyParser = require('body-parser')
const session = require('express-session')

router.get('/login', viewsController.loginForm)
router.post('/login', gadditController.authenticate)
router.use(gadditController.isLoggedIn)
router.get('/', viewsController.showIndex)
router.get('/home', viewsController.showHome)
router.get('/signup', viewsController.showSignUp)
router.get('/users', gadditController.index, viewsController.showAll)
router.post('/users', gadditController.newUser, viewsController.postUser)

module.exports = router
