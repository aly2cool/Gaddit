const commentsDB = require('../models/commentsDB')

module.exports = {
  create(req, res, next){
    console.log('my comment info -> ', req.body);
    console.log('req params from comments', req.params.id);
    commentsDB.create(req.body)
    .then(results => {
      console.log('made it in .then');
      res.locals.comments = results
      next()
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err)
    })
  },
  // getComments(req, res, next){
  // console.log('inside get comments controller');
  // commentsDB.getAllComments()
  // .then(results => {
  //   res.locals.comments = results
  // })
  // next()
  // .catch(err => {
  //   console.log(err);
  //   res.status(500).send(err)
  // })
  // }
}
