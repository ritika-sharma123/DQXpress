import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { blue, green } from "@mui/material/colors";
import "./index.scss";

const columns = [
  {
   
    field: "firstName",
    headerName: "Column Name",
    flex: 1,
    align: "center",
    headerAlign: "center",
   
  },
  
  {
    field: "lastName",
    headerName: "Null%",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "age",
    headerName: "Null# ?",
    flex: 1,
    type: "number",
    align: "center",
    headerAlign: "center",
    
  },
  {
    field: "fullName",
    headerName: "Distinct# ?",
    flex: 1,
    align: "center",
    headerAlign: "center",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
  {
    field: "fullNam1e",
    headerName: "Distinct",
    flex: 1,
    align: "center",
    headerAlign: "center",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
    
  },
];


const DataTable = () => {
  return (
    <>
      <Box
        sx={{
          height: 400,
          width: "100%",
          marginBottom: "100px",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
};




function DataTable1() {
    const columns = [
        {
            name: 'Column Name',
            selector:row => row.columnname,
            sortable: true

        },
        {
            name: "Null%",
            selector:row => row.null,
            sortable: true
        },

        {
            name: "Null#",
            selector:row => row.null,
            sortable: true
        },
        {
            name: "Distinct%",
            selector:row => row.distinct
        },
        {
            name: "Distinct#",
            selector:row => row.null
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
        <div className='container mt-5' >
           
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
export default DataTable1;
