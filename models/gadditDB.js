const pgp = require('pg-promise')()
const dbConfig = require('../config/dbConfig')
const db = pgp(dbConfig)

module.exports = {
  findAll() {
    return db.any(`SELECT * FROM ga_users`)
  },
  createUser(user) {
    return db.one(`INSERT INTO ga_users (first_name, last_name, user_name, password) VALUES ($/first_name/, $/last_name/, $/user_name/, $/password/) RETURNING *`, user)
  }
}
