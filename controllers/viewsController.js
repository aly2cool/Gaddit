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
    res.redirect('/')
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
    data: res.locals.post
  })
},

showUpdatedPost(req, res){
  res.render('./home/edit', {
    data: res.locals.post,
    users: req.session.user
  })
}

}
