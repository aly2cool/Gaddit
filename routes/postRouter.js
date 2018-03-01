const router = require('express').Router()
const postdb = require('../models/postDB')
const postController =  require('../controllers/postController')
const viewsController = require('../controllers/viewsController')

router.get('/:id', postController.findPost, viewsController.showPost)

module.exports = router
