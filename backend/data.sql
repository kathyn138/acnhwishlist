DROP DATABASE IF EXISTS "villagerwishlist";

CREATE DATABASE "villagerwishlist";

\c "villagerwishlist"

CREATE TABLE villagers (id SERIAL PRIMARY KEY, 
						name TEXT NOT NULL,
                        image TEXT NOT NULL, 
                        personality TEXT NOT NULL)