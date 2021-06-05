import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
require("dotenv").config();
import { mongoUri } from "./constants";
import { resolvers } from "./resolvers";
// MUST MATCH MODEL
import { typeDefs } from "./typeDefs";
import generateFakeData from "./fakeData/addCustomers";

// MUST include URL for mongo ?authSource=admin 
// monogURI points to DOCKER container
// TODO dockerize graphql and client
// establish build process
// add mocks
// add tests


const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.applyMiddleware({ app });

  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
      console.log("Connected to mongodb!!");

    })
    .catch(err => console.log("failed to connect to mongo ->", err));
  app.listen({ port: `${process.env.PORT}` }, () =>
    console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
  );
  // app.route('/add',(req, res, next) =>{
  //   return res.json({
  //       route: "Index"
  //   });
  // });

};

startServer();
