import { useState } from "react";
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import useQuery from "../../hooks/useQuery";
import useCount from "../../hooks/useCount";
import { formatPhoneNumber } from "../../utils/helpers"
import "./CustomerTable.css";


const defaultQuery = `
{
getPage(page:1, pageSize: 10){
  firstName
  lastName
  phone
  email

}
}
`
export default function CustomerTable() {
  const { customersData, fetchData } = useQuery({ query: defaultQuery });
  const { count } = useCount();
  function goToPage(page, pageSize) {
    const query = `
    {
      getPage(page:${page}, pageSize:${pageSize}){
        firstName
        lastName
        phone
        email
      }
      }
    `
    fetchData(query);
  }
  // console.log("cust", customersData.getPage)

  return <div className="wrapper">
    <button onClick={() => goToPage(3, 14)}>page 2</button> of {count}
    <div className="ag-theme-alpine" >
      <AgGridReact
        defaultColDef={{
          flex: 1,
          minWidth: 100,
          minHeight: 100,

        }}
        suppressRowClickSelection={true}
        groupSelectsChildren={true}
        debug={true}
        rowSelection={'multiple'}
        rowGroupPanelShow={'always'}
        pivotPanelShow={'always'}
        enableRangeSelection={true}
        paginationAutoPageSize={true}
        pagination={true}
        // onGridReady={onGridReady}
        // rowData={rowData}
        rowData={customersData.getPage}>
        <AgGridColumn field="firstName"></AgGridColumn>
        <AgGridColumn field="lastName"></AgGridColumn>
        <AgGridColumn field="phone"></AgGridColumn>
        <AgGridColumn field="email"></AgGridColumn>
      </AgGridReact>
    </div >
  </div>
}