module.exports = {

showAll(req, res){
  res.render('./gaddit/users', {
    data: res.locals.Allusers
  })
},

showSignUp(req, res){
  res.render('./gaddit/signup')
},

postUser(req, res){
  res.redirect('back')
}

}
