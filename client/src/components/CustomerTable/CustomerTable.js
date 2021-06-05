import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import useQuery from "../../hooks/useQuery"
import "./CustomerTable.css";

const query = `
{
  getPage(page:1){
    firstName
    lastName
    phone
    email
  
  }
}
`
export default function CustomerTable() {
  const { customersData } = useQuery({
    query
  });
  console.log("sust", customersData.getPage)

  return <div className="ag-theme-alpine" style={{
    height: '100%',
    width: '70%',
    margin: "auto"
  }} >
    <AgGridReact
      defaultColDef={{
        flex: 1,
        // minWidth: 1,
      }}
      rowData={customersData.getPage}>
      <AgGridColumn field="firstName"></AgGridColumn>
      <AgGridColumn field="lastName"></AgGridColumn>
      <AgGridColumn field="phone"></AgGridColumn>
      <AgGridColumn field="email"></AgGridColumn>
    </AgGridReact>
  </div>
}