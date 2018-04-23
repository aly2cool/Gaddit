const pgp = require('pg-promise')()
const dbConfig = require('../config/dbConfig')
const db = pgp(dbConfig)

module.exports = {
  create(user){
  console.log('inside models for comments ->', user);
  return db.one(`INSERT INTO ga_comments (post_id, user_content) VALUES ($1, $2) RETURNING *`, [user.post_id, user.user_content])
  // console.log('im in models for comments');
  }
}
