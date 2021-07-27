SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE "user" ( 
"userId" SERIAL PRIMARY KEY,
"token"  VARCHAR,
"userName" VARCHAR
);

CREATE TABLE "item" (
"itemId" SERIAL PRIMARY KEY,
"name" VARCHAR ( 50 ),
"description" VARCHAR ( 250 ),
"startingPrice" bigint NOT NULL,
"Url" VARCHAR ( 250 )
);

CREATE TABLE "bids" (
  "bidID" SERIAL PRIMARY KEY,
  "bidPrice" BIGINT,
  "itemId" BIGINT,
  "userId" BIGINT
);


