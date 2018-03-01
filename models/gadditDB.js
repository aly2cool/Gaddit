const pgp = require('pg-promise')()
const dbConfig = require('../config/dbConfig')
const db = pgp(dbConfig)

module.exports = {
  findAll() {
    return db.any(`SELECT * FROM ga_users`)
  },
  findOne(username){
    return db.one(`SELECT * FROM ga_users WHERE user_name=$1`, username)
  },
  createUser(user) {
    return db.one(`INSERT INTO ga_users (first_name, last_name, user_name, password) VALUES ($/first_name/, $/last_name/, $/user_name/, $/password/) RETURNING *`, user)
  },
  deleteUser(user){
    return db.none(`DELETE * FROM ga_users WHERE user_name = $1`, user)
  },
  authenticateByUsername(user){
        return db.one(`SELECT * FROM ga_users WHERE user_name = $[user_name] AND password = $[password]`, user)
  }
  // checkIfExists(user){
  //   return db.none(`SELECT * FROM ga_users WHERE user_name=$1`)
  // }
}
