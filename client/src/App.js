import React, { Fragment } from "react";
// import queryGraphQl from "./async/queryData";
import CustomerTable from "./components/CustomerTable";
import Modal from "./components/Modal";
// import Pager from "./components/Pagination";
// import customerList from "./queries/index"
require("dotenv").config();

function App() {

  return (
    <>
      {/* <Pager /> */}
      <CustomerTable />
      {/* <Modal isActive={true}>
        <div>some MORE content</div>
      </Modal> */}
    </>
  );
}

export default App;
