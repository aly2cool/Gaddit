const express = require('express')
const gadditController = require('../controllers/gaddit-controller')
const router = express.Router()
const viewsController = require('../controllers/viewsController')

// router.get('/login', viewsController.loginForm)
// router.post('/login', gadditController.authenticate)
router.get('/',  viewsController.showIndex)
router.get('/home', gadditController.isLoggedIn, viewsController.showHome)
router.get('/users', gadditController.index, viewsController.showAll)
router.get('/logout', gadditController.logout)

// router.post('/home', gadditController.)
// router.use(gadditController.isLoggedIn)

module.exports = router
