
const gadditDB = require('../models/gadditDB')
const session = require('express-session')

module.exports = {

index(req, res, next){
  gadditDB.findAll()
  .then(results => {
    res.locals.allUsers = results
    next()
  })
  .catch(err => next(err))
  },

newUser(req, res, next) {
  // console.log(req.body)
  gadditDB.createUser(req.body)
  .then(results => {
      res.locals.newPerson = results
      next()
    })
    .catch(err => next(err))
  },
delete(req, res, next){
    gadditDB.deleteUser(req.params.id)
    .then(() => next())
    .catch(err => next(err))
  },
  findUser(req, res){
    console.log(req.body.user_name)
    gadditDB.findOne(req.body.user_name)
  },
  authenticate(req, res, next) {
    gadditDB.authenticateByUsername(req.body)
    .then(user => {
      // console.log(req.session.user)
      req.session.user = user;
      req.session.isLoggedIn = true;
      req.session.success = 'Authenticated as ' + user.user_name;
      console.log('login successful.')
      next();
    })
    .catch(err => {
      req.session.error = 'Authentication failed. Please try again';
      res.redirect(`back`);
      console.log('we fucked up')
      next(err);
    })
  },
  isLoggedIn(req, res, next) {
    if (req.session.user) {
      console.log(req.session)
      next()
    } else {
      req.session.error = `Login required`
      console.log('wtf')
      res.redirect(`/login`)
    }
  },
  logout(req, res){
    req.session.destroy()
    res.redirect('/')
  }
}
