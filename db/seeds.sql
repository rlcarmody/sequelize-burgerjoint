USE burgers_db;
INSERT INTO burgers (burger_name, devoured)
VALUES ('Black and Bleu', false);
INSERT INTO burgers (burger_name, devoured)
VALUES ('The Everything Burger', false);
INSERT INTO burgers (burger_name, devoured)
VALUES ('Hawaiian Chicken Burger', false);

INSERT INTO ingredients (ingredient_name)
VALUES
	('bun'),
	('beef patty'),
  ('bacon'),
  ('tomato'),
  ('onion'),
  ('lettuce'),
  ('pickle'),
  ('grilled chicken'),
  ('pineapple'),
  ('fried egg'),
  ('avocado'),
  ('bleu cheese');

INSERT INTO burger_ingredients (burgerID, ingredientID)
VALUES
	(1,1),
  (1,2),
  (1,3),
  (1,4),
  (1,5),
  (1,12),
  (2,1),
  (2,2),
  (2,3),
  (2,4),
  (2,6),
  (2,7),
  (2,10),
  (2,11),
  (3,1),
  (3,6),
  (3,8),
  (3,9);