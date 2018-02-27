const express = require('express')
const gadditController = require('../controllers/gaddit-controller')
const router = express.Router()
const viewsController = require('../controllers/viewsController')

router.get('/', gadditController.index)

router.get('/signup', gadditController.newUser, viewsController.showAdd)

// router.get('/signup', (req, res) => {
//   res.render('./gaddit/signup')
// })


router.get('/login', (req, res) => {
  res.render('./gaddit/login')
})

router.get('/courses', (req, res) => {
  res.render('./gaddit/courses')
})

router.get('/course:id')

router.get('/courses/course:id')

module.exports = router
