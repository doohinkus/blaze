import { gql } from "apollo-server-express";
// Query fields must match up with resolvers, including arguments
export const typeDefs = gql`
  type Query {
    customers: [Customer!]!
    getPage(page: Int!, pageSize: Int!): [Customer!]!
  }
  type Customer{
    id: ID!
    firstName: String
    lastName: String
    email: String
    phone: String
  }
  type Mutation {
    createCustomer( 
      firstName: String,
      lastName: String,
      email: String,
      phone: String): Customer!
  }
`;
