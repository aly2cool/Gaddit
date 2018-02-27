\c gaddit_db

DROP TABLE IF EXISTS ga_posts;
DROP TABLE IF EXISTS ga_comments;
DROP TABLE IF EXISTS ga_users;

CREATE TABLE ga_users (
id SERIAL PRIMARY KEY,
first_name VARCHAR(255),
last_name VARCHAR(255),
user_name VARCHAR(255),
password VARCHAR(255)
);

CREATE TABLE ga_posts (
id SERIAL PRIMARY KEY,
post_name TEXT,
post_content TEXT,
date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE ga_comments (
id SERIAL PRIMARY KEY,
user_content TEXT
);
