### Unfinished Exercise
## What I have done so far
* Dockerized (requires Docker and Docker Compose) mongodb
* Setup and connected Apollo server to mongodb
* Setup client with ag-grid-react and connected to Apollo server / api
* Pagination - Wrote query, using mongoose/mongo utils for cursor based pagination. (tables uses client pagination--but query allows for any page size.)
* Wrote mutations for CRUD operations
* Added server side pagination 
* Klunkily added a way to add customers / project uses BABEL, so the server must running. See directions.
## Todo/missing
* Unit Tests 
* Dockerize and deploy / CI CD pipeline
* Add components / form for CRUD operation.
## Big stuggle was setting up Apollo and dockerizing mongo db
# Run project 
## Run Mongo 
cd into the **mongo-apollo** directory
Open terminal
```
npm install
```
```
docker-compose -f "./docker-compose.yml" up -d --build
```
This will build and run mongo. See directions below to stop mongo.

With mongo running, run the following command in the **mongo-apollo** folder.
```
npm run start
```

## GraphQl tool available here
http://localhost:4000/graphql

How to stop the mongo instance:

```
docker ps
```

Find the running container, then type:

```
docker stop <first four characters of container id>
```

Run docker ps again to ensure the instance has stopped.

## Populate db
To change the number of recorders, edit this line in **fakeData/addCustomers.js**
```
generateFakeData(<desired customers to be generated>);

```
Then run the following:
```
npm run addCustomers
```
Console should show updates. Stop the server. Then run the following command:
```
npm run start
```
COMMENT This is a klunky way to add customers, but since I'm using babel, it's the most convenient way to do it. I'm exploring a ways to add customers in a better way.

# Running client
cd into the **client** directory
Open terminal
```
npm install
```

```
npm start
```
## Project runss here
http://localhost:3000/

## Note
I know this incomplete. I am working FT AND I'm going on vaction this week. I didn't have a lot of extra time. As a result, I will continue to add to this project next week--even if it's for own enjoyment. Thanks.


