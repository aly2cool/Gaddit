let moment = require('moment')
module.exports = {

showAll(req, res){
  res.render('./home/users', {
    data: res.locals.allUsers
  })
},

showSignUp(req, res){
  res.render('./home/signup')
},

showHome(req, res){
  // console.log(req.session.user)
  res.render('./home/home', {
    data: req.session.user
  })
},

showIndex(req, res){
  // console.log(req.session.user)
  res.render('./index.ejs', {
    data: req.session.user
  })
},

postUser(req, res){
    res.redirect('/login')
  },

loginForm(req, res){
  res.render('./home/login', {
    data: req.session.user
  })
},

showPostIndex(req, res){
  res.render('./home/posts', {
    data: res.locals.allPosts,
    users: req.session.user
  })
},

showNewPost(req, res){
  setInterval(function(){
    res.redirect('/index')
  }, 1000)
},

showPost(req, res){
  res.render('./home/posts')
},

showCurrentPost(req, res){
  res.render('./home/checkPost', {
    data: res.locals.post,
    users: req.session.user,
    comments: res.locals.getInfo,
  })
},

showUpdatedPost(req, res){
  res.render('./home/edit', {
    data: res.locals.post,
    users: req.session.user
  })
},

showUserPage(req, res){
  res.render('./home/userPage', {
    users: req.session.user,
    data: res.locals.oneUser,
    moment: moment
    })
  },
renderComment(req, res){
  res.render('./home/checkPost')
  }
}
