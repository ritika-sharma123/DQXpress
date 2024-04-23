import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

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

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const DataTable = () => {
  return (
    <>
      <Box
        sx={{
          height: 400,
          width: "100%",
          marginBottom: "10px",
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

export default DataTable;
