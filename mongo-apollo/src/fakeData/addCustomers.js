const { MongoClient } = require("mongodb");
const {mongoUri} = require("../constants");
const {Customer}  = require("../models/Customer");
const faker = require("faker");
require("dotenv").config();

export default function generateFakeData(totalFakeRecords){
    for (let increment = 0; increment < totalFakeRecords; increment++) {
      //    const customer = new Customer({ firstName, lastName, phone, email});
      // await customer.save();
      const customer = new Customer({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone
          .phoneNumberFormat()
          .split("")
          .filter((item) => /\d/.test(item))
          .join(""),
      });
      customer
        .save()
        .then(() => console.log("Created -> ", customer))
        .catch((err) =>
          console.log("Failed to create customer -> ", customer, " ERROR ", err)
        );
    }
  }
