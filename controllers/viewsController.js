module.exports = {

showAdd(req, res){
  res.render('./gaddit/signup')
},
showUsers(req, res){
  res.render('./gaddit/users', {
    data: res.locals.users
    })
  }

}
