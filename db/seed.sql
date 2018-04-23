\c gaddit_db;

INSERT INTO ga_users (first_name, last_name, user_name, password) VALUES
(
  'Aly',
  'Badran',
  'Aly2cool',
  'testing'
);
INSERT INTO ga_users (first_name, last_name, user_name, password) VALUES
(
  'moe',
  'moe',
  'moe',
  'moe'
);
INSERT INTO ga_users (first_name, last_name, user_name, password) VALUES
(
  'tom',
  'tom',
  'tom',
  'tom'
);

INSERT INTO ga_posts (post_user, post_title, post_content) VALUES
(
  'Aly2cool',
  'testing Post',
  'this is a test'
);
INSERT INTO ga_posts (post_user, post_title, post_content) VALUES
(
  'moe',
  'some s Post',
  'this is anotherrr test'
);
INSERT INTO ga_posts (post_user, post_title, post_content) VALUES
(
  'tom',
  'yup',
  'this is another test'
);

INSERT INTO ga_comments (post_id, user_content, commenter) VALUES
(
  '1',
  'hi',
  'moe'
);
INSERT INTO ga_comments (post_id, user_content, commenter) VALUES
(
  '2',
  'nice',
  'Aly2cool'
);
INSERT INTO ga_comments (post_id, user_content, commenter) VALUES
(
  '3',
  'awesome!',
  'tom'
);
