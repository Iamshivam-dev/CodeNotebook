# AWS Elastic Beanstalk

For cheatsheet/documentation refer to [documentation.md](documentation.md)

### Stack Used
- postgres
- docker
- elasticbeanstalk
- nodejs + express
- REST API

### Install Deps

```sh
npm install
```

### Start server

```sh
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/eb_learning" PORT=5555 npm start
````

# Run Postgres Server

```sh
docker compose up
```
This will setup the postgres server and port to host system at port defiend in `docker-compose.yml` file. 


## Connect to Database

### (Option 1) Using psgl Client

```sh
sudo apt install postgres
```

```sh
psql postgresql://postgres:postgres@localhost:5432/eb_learning
```

### (Option 2: Preferred) Useing VS code extension
From VS code install any postgres client extension. And just enter port, username, password.


## Setup Database
### Create Databse:
Run below query:

```sh
CREATE DATABASE eb_learning
```

### Create users table

```sh
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);
```