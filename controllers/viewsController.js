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
  res.render('./home/index')
},

showIndex(req, res){
  res.render('./index.ejs')
},

postUser(req, res){
  res.redirect('/home')
},

loginForm(req, res){

  res.render('./home/login')

  }

}
