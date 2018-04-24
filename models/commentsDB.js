const pgp = require('pg-promise')()
const dbConfig = require('../config/dbConfig')
const db = pgp(dbConfig)

module.exports = {
  create(user){
  console.log('inside models for comments ->', user);
  return db.one(`INSERT INTO ga_comments (user_content, post_id, commenter) VALUES ($1, $2, $3) RETURNING *`, [user.user_content, user.post_id, user.commenter])
  // console.log('im in models for comments');
  },
  getComments(user){
    console.log('inside get comments', user);
    console.log('user data -> ', user.post);
    return db.any(`SELECT * FROM ga_posts
                  JOIN
                  ga_comments
                  ON ga_posts.id = ga_comments.post_id
                  WHERE ga_posts.id = $1
                  `, user.post.id)
  }
}
