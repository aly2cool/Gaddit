\c gaddit_db;

INSERT INTO ga_users (first_name, last_name, user_name, password) VALUES
(
  'Aly',
  'Badran',
  'Aly2cool',
  'testing'
);

INSERT INTO ga_posts (post_user, post_title, post_content) VALUES
('Aly2cool',
'testing Post',
'this is a test');
