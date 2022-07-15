import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const DataGrid = () => {
   const [rowData,setRowData]=useState([])
   
   let columnDefs =null

   columnDefs = [
     {headerName:'ID', field:'id',sortable:true,filter:true,checkboxSelection:true},
     {headerName:'User Name', field:'username',sortable:true,filter:true},
     {headerName:'Email', field:'email',sortable:true,filter:true}
     
   ]
const rowStyle={background:'grey'}
const getRowStyle=(params)=>{
    if(params.node.rowIndex %2 ===0){
        return {background:'yellow'}
    }
}
const handleClick=()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=> setRowData(data))
}
   return (
       <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
            <button onClick={handleClick}>Show users</button>
           <AgGridReact rowStyle={rowStyle} getRowStyle={getRowStyle}
               rowData={rowData}
               columnDefs={columnDefs}>
           </AgGridReact>
       </div>
   );
};
export default DataGrid