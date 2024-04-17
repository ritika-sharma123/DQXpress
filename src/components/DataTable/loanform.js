
import React from 'react';
//import React, { usestate } from 'react'
import DataTable from 'react-data-table-component';

import "./index.scss";

function LoanForm2() {
    const columns = [
        {
            name: 'asd',
            selector:row => row.columnname,
            sortable: true

        },
        {
            name: "Null%",
            selector:row => row.null,
            sortable: true
        },

        
        
        
    ];
    const data = [
        {
            id: 1,
            columnname:'shamu',
            null: '25',
            distinct : 'adad',

        },
        {

            id: 2,
            columnname:'ramesh',
            null: '27',
            distinct : 'adad',
        },
       
    ]
   
    
    return(
        <div className='container mt-5'>
           
            <DataTable 
            columns={ columns}
            data={data}
            selectableRows
            fixedHeader
            pagination
            ></DataTable>

        </div>
    )
}
export default LoanForm2;
