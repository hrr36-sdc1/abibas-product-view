CREATE DATABASE products;

\c products

CREATE TABLE SHOES(
  id SERIAL PRIMARY KEY,
  colors TEXT NOT NULL,
  type TEXT NOT NULL,
  model TEXT NOT NULL,
  sizes TEXT NOT NULL,
  price REAL NOT NULL,
  image_id INTEGER NOT NULL,
  review_count INTEGER NOT NULL,
  avg_stars REAL NOT NULL
);

CREATE INDEX model_idx ON shoes (model);

CREATE TABLE images(
  id SERIAL PRIMARY KEY,
  links TEXT NOT NULL
);

SET random_page_cost=1;
SET work_mem='16MB';