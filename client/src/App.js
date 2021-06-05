import React from "react";
// import queryGraphQl from "./async/queryData";
import CustomerTable from "./components/CustomerTable"
import Pager from "./components/Pagination";
// import customerList from "./queries/index"
require("dotenv").config();

function App() {

  return (
    <div className="">
      {/* <Pager /> */}
      <CustomerTable />
    </div>
  );
}

export default App;
