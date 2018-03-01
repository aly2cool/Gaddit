const postDB = require('../models/postDB')
const session = require('express-session')

module.exports = {

index(req, res, next){
  postDB.findAll()
  .then(results => {
    res.locals.allPosts = results
    next()
  })
  .catch(err => next(err))
  },

newUser(req, res, next) {
  // console.log(req.body)
  postDB.createPost(req.body)
  .then(results => {
      res.locals.newPost = results
      next()
    })
    .catch(err => next(err))
  },
delete(req, res, next){
    postDB.deletePost(req.params.id)
    .then(() => next())
    .catch(err => next(err))
  },
findPost(req, res, next){
    postDB.findOne(req.params.id)
    .then(result => {
      res.locals.post = result
      next()
    })
    .catch(err => next(err))
  }
}
