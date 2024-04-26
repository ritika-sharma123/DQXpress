import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { columns } from ".";





export const DataTable = () => {
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
               
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    pageSizeOptions={[10]}
                    disableRowSelectionOnClick />
                    
                
            </Box>
    
        </>
    );
};
export default DataTable;
