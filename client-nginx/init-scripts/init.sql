CREATE DATABASE logdb1;

-- Wait until PostgreSQL is ready
-- \! until pg_isready -h localhost -p 5432 -U postgres -d logDb1; do sleep 1; done

-- Switch to the database
\c logdb1;

-- Create the user
CREATE USER dbuser WITH ENCRYPTED PASSWORD 'mypass';
ALTER USER dbuser WITH SUPERUSER;

-- Grant privileges to the user
GRANT ALL PRIVILEGES ON DATABASE logdb1 TO dbuser;

-- Optionally, switch to the 'public' schema
SET search_path TO public;

-- \i /docker-entrypoint-initdb.d/migrations/20231118054331-createLogsTable.js;