const commentsDB = require('../models/commentsDB')

module.exports = {
  create(req, res){
    console.log('my comment info -> ', req.body);
    commentsDB.create(req.body)
    .then(results => {
      res.json ({
        message: 'ok'
      })
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
  // .catch(err => {
  //   console.log(err);
  //   res.status(500).send(err)
  // })
  // }
}
