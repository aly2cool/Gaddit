const pgp = require('pg-promise')()
const dbConfig = require('../config/dbConfig')
const db = pgp(dbConfig)

module.exports = {
  findAll() {
    return db.any(`SELECT * FROM ga_posts`)
  },
  findOne(id){
    return db.one(`SELECT * FROM ga_posts WHERE id=$1`, id)
  },
  createPost(post) {
    return db.one(`INSERT INTO ga_posts (post_user, post_title, post_content) VALUES ($/post_user/, $/post_title/, $/post_content/) RETURNING *`, post)
  },
  updatePost(post){
    return db.one(`UPDATE ga_posts SET
                  post_user = $/post_user/
                  post_title = $/post_title/
                  post_content = $/post_content/
                  WHERE id = $/id/
                  RETURNING *`, post)
  },
  deletePost(user){
    return db.none(`DELETE * FROM ga_posts WHERE post_name = $1`, user)
  }
  // authenticateByUsername(user){
  //       return db.one(`SELECT * FROM ga_posts WHERE user_name = $[user_name] AND password = $[password]`, user)
  // }

}
