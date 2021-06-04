import { Customer } from "./models/Customer";

export const resolvers = {
  Query: {
    customers: () => Customer.find(),
    getPage(page = 1) {
      
      const PAGE_SIZE = 5;   // Similar to 'limit'
      const skip = (page - 1) * PAGE_SIZE; // For page 1, the skip is: (1 - 1) * 20 => 0 * 20 = 0
      return Customer.find({})  
                      .skip(skip) // Same as before, always use 'skip' first
                      .limit(PAGE_SIZE)
    }
  },
  Mutation: {
    // must match args for typeDefs!!!!
    createCustomer: async (_, { firstName, lastName, phone, email }) => {
      const customer = new Customer({ firstName, lastName, phone, email});
      await customer.save();
      return customer;
    }
  }
};
