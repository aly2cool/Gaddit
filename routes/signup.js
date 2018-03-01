const express = require('express')
const gadditController = require('../controllers/gaddit-controller')
const viewsController = require('../controllers/viewsController')
const router = express.Router()

router.get('/', viewsController.showSignUp)
router.post('/', gadditController.newUser, viewsController.postUser)


module.exports = router
