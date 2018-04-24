const router = require('express').Router()
const commentdb = require('../models/commentsDB')
const commentsController = require('../controllers/commentsController')
const viewsController = require('../controllers/viewsController')
const postController = require('../controllers/postController')


router.post('/:id', commentsController.create, postController.findPost, viewsController.showCurrentPost)
// router.get('/', commentsController.getComments, viewsController.showCurrentPost)

module.exports = router;
