\c gaddit_db

DROP TABLE IF EXISTS ga_comments;
DROP TABLE IF EXISTS ga_posts;
DROP TABLE IF EXISTS ga_users;

CREATE TABLE ga_users (
id SERIAL PRIMARY KEY,
first_name VARCHAR(255),
last_name VARCHAR(255),
user_name VARCHAR(255) UNIQUE,
password VARCHAR(255),
date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE ga_posts (
id SERIAL PRIMARY KEY,
post_user VARCHAR references ga_users(user_name),
post_title TEXT,
post_content TEXT,
date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE ga_comments (
id SERIAL PRIMARY KEY,
post_id INTEGER references ga_posts(id) ON DELETE CASCADE,
commenter VARCHAR references ga_users(user_name),
user_content TEXT,
date_created TIMESTAMP NOT NULL DEFAULT NOW()
);
