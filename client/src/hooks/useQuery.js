
import {useEffect, useState} from "react";
import queryGraphQl from "../async/queryData";
import isEmpty from "lodash"

export default function useQuery({query}){
  const [customersArray, setCustomerArray] = useState([]);
    // load data
   useEffect(() => {
     async function fetchData() {
     try {
      //  console.log("QUER",query)
       let customerData = await queryGraphQl({query});
          // if(customerData && customerData.data && customerData.data.customers){
          // } else {
          //   setCustomerArray([]);
          // }
          setCustomerArray(customerData.customers);
          console.log("Data>>", customerData.customers);
        }
        catch(err){
          console.log(err);
          setCustomerArray([])
        }
     }
     fetchData();
    
  }, []);

  return [customersArray];
};
