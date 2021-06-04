import React, {useEffect} from "react";
import queryGraphQl from "./async/queryData";
import CustomerTable from "./components/CustomerTable"
import customerList from "./queries/index"
require("dotenv").config();

function App() {

  return (
    <div className="">
      <CustomerTable />
    </div>
  );
}

export default App;
