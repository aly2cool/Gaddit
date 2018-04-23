const router = require('express').Router()
const commentdb = require('../models/commentsDB')
const commentsController = require('../controllers/commentsController')
const viewsController = require('../controllers/viewsController')


router.post('/', commentsController.create)
// router.get('/', commentsController.getComments)

module.exports = router;
