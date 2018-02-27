const express = require('express')
const gadditController = require('../controllers/gaddit-controller')
const router = express.Router()
const viewsController = require('../controllers/viewsController')



router.route('/')
.get((req, res) => { res.render('./gaddit/index')})

router.get('/signup', viewsController.showSignUp)

router.get('/users', gadditController.index, viewsController.showAll)

router.post('/users', gadditController.newUser, viewsController.postUser)


// router.get('/users', gadditController.index, (req, res) => {
//   res.render('./gaddit/users', {
//     data: res.locals.Allusers
//   })
// })


// router.post('/users', gadditController.newUser, (req, res) => {
//     res.render('./gaddit/users'), {
//       data: res.locals.users
//     }
// });

module.exports = router
