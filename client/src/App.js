import React, { Fragment } from "react";
import CustomerTable from "./components/CustomerTable";
import AddCustomer from "./components/AddCustomer";
import Modal from "./components/Modal";
require("dotenv").config();

function App() {

  return (
    <>
      <CustomerTable />
      <Modal isActive={false}>
        <AddCustomer />
      </Modal>
    </>
  );
}

export default App;
