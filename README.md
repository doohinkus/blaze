### Unfinished Exercise
## What I have done so far
* Dockerized (requires Docker and Docker Compose) mongodb
* Setup and connected Apollo server to mongodb
* Setup client with ag-grid-react and connected to Apollo server / api
* Kunkily added a way to add customers / uses BABEL, so server must running. See directions.
## Todo/missing
* Pagination - Apollo has several ways to achieve it, I'm exloring options
* Tests
* Dockerize and deploy / CI CD pipeline
* CRUD - I wrote the mutations for these operations -- just need to add routes and components.
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
With apollo and mongo running, open **index.js**
Uncomment this line. Change the number to make more or fewer customers 
```
// generateFakeData(3);

```
Console should show updates.
COMMENT the line! If you don't it will create records everytime a files changes. This is klunly part. I had to do this becuase I'm using Babel.
This will NOT WORK becuase node doesn't "understand" ES6.
```
node <addCustomers.js>
```
As a result, I had to resort to the above. I'm exploring a way to fix this.

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


