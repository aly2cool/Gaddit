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
  console.log(req.session.user)

  res.render('./home/index', {
    data: req.session.user
  })
},

showIndex(req, res){
  console.log(req.session.user)
  res.render('./index.ejs', {
    data: req.session.user
  })
},

postUser(req, res){
  res.redirect('/')
},

loginForm(req, res){
  res.render('./home/login')
},

showPost(req, res){
  res.render('./home/post')
}

}
