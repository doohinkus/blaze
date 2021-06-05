import { Customer } from "./models/Customer";

export const resolvers = {
  Query: {
    customers: () => Customer.find(),
    // must include _ as FIRST argument
    getPage(_, { page }) {
      const PAGE_SIZE = 10;   // Similar to 'limit'
      const skip = (page - 1) * PAGE_SIZE; // For page 1, the skip is: (1 - 1) * 20 => 0 * 20 = 0
      const results = async () => {
        try {
          let records = await Customer.find({})
            .skip(skip) // Same as before, always use 'skip' first
            .limit(PAGE_SIZE)
          // console.log(records, page)
          return records
        } catch (err) {
          console.log("Error while fetching page ", err)
          throw new Error("Error fetching page results", err)

        }
      }
      return results();
    }
  },
  Mutation: {
    // must match args for typeDefs!!!!
    createCustomer: async (_, { firstName, lastName, phone, email }) => {
      const customer = new Customer({ firstName, lastName, phone, email });
      await customer.save();
      return customer;
    }
  }
};
