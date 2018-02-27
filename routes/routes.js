const express = require('express')
const gadditController = require('../controllers/gaddit-controller')
const router = express.Router()
const viewsController = require('../controllers/viewsController')


router.get('/signup', viewsController.showAdd)

router.route('/')
.get((req, res) => { res.render('./gaddit/index')})
.post(gadditController.newUser, (req, res) => {
    res.render('./gaddit/users'), {
      data: res.locals.users
    }
});

module.exports = router
