
const gadditDB = require('../models/gadditDB')

module.exports = {

index(req, res, next){
  gadditDB.findAll()
  .then(results => {
    res.locals.Allusers = results
    next()
  })
  .catch(err => next(err))
  },

newUser(req, res, next) {
  console.log(req.body)
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
  }
}
