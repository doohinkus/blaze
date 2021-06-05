
import { useEffect, useState } from "react";
import queryGraphQl from "../async/queryData";

export default function useQuery({ query }) {
  const [customersData, setCustomerData] = useState([]);
  // load data
  useEffect(() => {
    async function fetchData() {
      try {
        //  console.log("QUER",query)
        let customerData = await queryGraphQl({ query });
        setCustomerData(customerData);
        // console.log("Data>>", customerData);
      }
      catch (err) {
        console.log(err);
        setCustomerData([])
      }
    }
    fetchData();

  }, []);

  return { customersData };
};
