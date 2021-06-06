
import { useEffect, useState } from "react";
import queryGraphQl from "../async/queryData";

export default function useQuery({ query }) {
  const [customersData, setCustomerData] = useState([]);

  const fetchData = async (query) => {
    console.log(query)
    if (!query) return;
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
  // load data
  useEffect(() => {
    // async function fetchData(query) {
    //   if (!query) return;
    //   try {
    //     //  console.log("QUER",query)
    //     let customerData = await queryGraphQl({ query });
    //     setCustomerData(customerData);
    //     // console.log("Data>>", customerData);
    //   }
    //   catch (err) {
    //     console.log(err);
    //     setCustomerData([])
    //   }
    // }
    fetchData(query);
    // return () => 

  }, [query]);

  return { customersData, fetchData };
};
