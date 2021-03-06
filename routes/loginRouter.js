const gadditController = require('../controllers/gaddit-controller')
const viewsController = require('../controllers/viewsController')
const express = require('express')
const router = express.Router()

router.get('/', viewsController.loginForm)
router.post('/', gadditController.authenticate, viewsController.showHome)

module.exports = router
