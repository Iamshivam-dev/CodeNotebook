### RDS Database:
Using docker-compose to setup database
#### Below is information about [docker-compose.yml](docker-compose.yml)

# Docker compose for postgres setup:

```sh 
version: '3.8'
```
 Define Docker Version
___
```sh
services:
  db:
   image: postgres:13-alpine
   restart: always
   environment:
     - POSTGRES_USER=postgres
     - POSTGRES_PASSWORD=postgres
   ports:
    - '5432:5432'
   volumes:
      - db:/var/lib/postgresql/data
volumes:
  db:
    driver: 'local'
    
```


Add Service for database:
- services: is to add database service
  - db: is to add database service
    - image: this is docker image for postgres
    - restart: setting this to always will restart the service if crash
    - environment: define environment variables, this username and password will be used as default postgres username and password
    - ports: define port binding here, this part binds the port of docker image to host application port. This will make the database service avaiable directly to host
    - volumes: Defines volume for postgres



- volumes: This defines volumes for docker service
  - db: Define for which service we need volumn
    - driver: What will be volumne, in this case its 'local'
    
