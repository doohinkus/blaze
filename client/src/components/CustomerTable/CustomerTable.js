import {useEffect, useState} from "react";
import queryGraphQl from "../../async/queryData";
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import useQuery from "../../hooks/useQuery"
import "./CustomerTable.css";

export default function CustomerTable(){
   const query = `
        query {
          customers{
            firstName
            lastName
            phone
            email
          }
        }
      ` 
   const [customersArray] = useQuery({
      query: `
        query {
          customers{
            firstName
            lastName
            phone
            email
          }
        }
      `});
   console.log(customersArray)
  // const [customersArray, setCustomerArray] = useState();
  //   // load data
  //  useEffect(() => {
  //   async function fetchData() {
  //   let customerData = await queryGraphQl({
  //     query: `
  //       query {
  //         customers{
  //           firstName
  //           lastName
  //           phone
  //           email
  //         }
  //       }
  //     `});
  //   //   console.log(customerData.data.customers);
  //     setCustomerArray(customerData.data.customers.splice(50,) || [])
  //     // return await customerData.data.customers;
  //   }
  //   fetchData();
  // }, []);
  
//    console.log(customersArray)
    return <div className="ag-theme-alpine" style={{
          height: '100%',
          width: '70%',
          margin: "auto"
        }} >
           <AgGridReact
            defaultColDef={{
            flex: 1,
            minWidth: 100,
          }}
               rowData={customersArray}>
               <AgGridColumn field="firstName"></AgGridColumn>
               <AgGridColumn field="lastName"></AgGridColumn>
               <AgGridColumn field="phone"></AgGridColumn>
               <AgGridColumn field="email"></AgGridColumn>
           </AgGridReact>
       </div>
}