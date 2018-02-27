const gadditDB = require('../models/gadditDB')

module.exports = {

index(req, res){
  gadditDB.findAll()
  .then(() => {
    res.render('index')
  })
  .catch(err => {
    res.status(500).send({
    message: 'I fucked up',
    error: err
      })
    })
  },
newUser(req, res, next) {
  console.log(req.body)
  console.log('im heree')
  gadditDB.createUser(req.body)
  .then(results => {
      res.locals.results = results
    })
    .catch(err => {
      res.status(500).json({
          message: 'error',
          error: err
      })
    })
  }
}
