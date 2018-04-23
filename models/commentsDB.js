const pgp = require('pg-promise')()
const dbConfig = require('../config/dbConfig')
const db = pgp(dbConfig)

module.exports = {
  create(user){
  console.log('inside models for comments');
  return db.one(`INSERT INTO ga_comments
                  post_id,
                  user_commented,
                  user_content
                  VALUES
                  (
                  $[post_id],
                  $[user_commented],
                  $[user_content],
                  )
                  RETURNING *`, user)
  // console.log('im in models for comments');
  }
}
