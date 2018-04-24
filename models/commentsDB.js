const pgp = require('pg-promise')()
const dbConfig = require('../config/dbConfig')
const db = pgp(dbConfig)

module.exports = {
  create(user){
  console.log('inside models for comments ->', user);
  return db.one(`INSERT INTO ga_comments (post_id, commenter, user_content) VALUES ($[post_id], $[commenter], $[user_content]) RETURNING *`, user)
  // console.log('im in models for comments');
  },
  getComments(id){
    console.log('inside get comments', id);
    return db.any(`SELECT * FROM ga_posts
                  JOIN
                  ga_comments
                  ON ga_posts.id = ga_comments.post_id
                  WHERE ga_posts.id = $1
                  `, id)
  }
}
