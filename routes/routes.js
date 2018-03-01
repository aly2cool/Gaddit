const express = require('express')
const gadditController = require('../controllers/gaddit-controller')
const router = express.Router()
const viewsController = require('../controllers/viewsController')

// router.get('/login', viewsController.loginForm)
// router.post('/login', gadditController.authenticate)
router.get('/', viewsController.showIndex)

router.use(gadditController.isLoggedIn)

router.get('/home', viewsController.showHome)
// router.post('/home', gadditController.)
router.get('/users', gadditController.index, viewsController.showAll)

router.get('/logout', gadditController.logout)

module.exports = router
