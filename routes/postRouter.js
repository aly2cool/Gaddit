const router = require('express').Router()
const postdb = require('../models/postDB')
const postController =  require('../controllers/postController')
const viewsController = require('../controllers/viewsController')
const gadditController = require('../controllers/gaddit-controller')


router.post('/', postController.newPost)
router.get('/', gadditController.isLoggedIn, postController.index, viewsController.showPostIndex)
router.delete('/:id', postController.delete, (req, res) => {
      res.redirect('/index')
})
router.get('/:id', gadditController.isLoggedIn, postController.findPost, viewsController.showCurrentPost)
router.get('/edit/:id', postController.findPost, viewsController.showUpdatedPost)
router.put('/edit/:id', postController.updatePost)
// router.get('/posted', (req, res) => {
//       res.render('./home/posted')
// })
// // router.get('/:id', postController.findPost, viewsController.showPost)

module.exports = router
