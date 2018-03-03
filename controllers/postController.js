const postDB = require('../models/postDB')

module.exports = {

index(req, res, next){
  postDB.findAll()
  .then(results => {
    res.locals.allPosts = results
    next()
    console.log(results)
    })
  .catch(err => next(err))
  },

newPost(req, res, next) {
  // console.log(req.body)
  postDB.createPost(req.body)
  .then(results => {
      res.locals.newPost = results
      res.render('./home/posted')
    })
    .catch(err => console.log(err))
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
  },
updatePost(req, res){
  console.log('i got hit ')
    postDB.updatePost(req.body)
    .then(results => {
        res.locals.updated = results
        res.redirect('/index')
    })
    .catch(err => console.log(err))
  }
}
