import mongoose from "mongoose";

const customerSchema = {
 firstName: String,
 lastName: String,
 email: String,
 phone: String
};

export const Customer = mongoose.model("Customer", customerSchema);
