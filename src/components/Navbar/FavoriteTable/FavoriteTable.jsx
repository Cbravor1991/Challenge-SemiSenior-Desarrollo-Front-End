import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

const FavoriteTable = () => {

const postsFavorite = useSelector((state) => state.favorites);

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 700 },
    { field: 'completed', headerName: 'Completed', width: 150,
      renderCell: (params) => (
        params.value ? 'Sí' : 'No' 
      )
    },
  
  ];

  return (
    
    <Box   sx={{
     
      maxWidth: '1200px', 
      margin: '0 auto', 
      height: 400,
      display: 'flex',
      justifyContent: 'center', 
      alignItems: 'center', 
    }}>
    
          <DataGrid
        rows={postsFavorite} 
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
      
        disableColumnSelector 
        disableRowSelectionOnClick 
        autoHeight 
        getRowId={(row) => row.id}
    
      />
    </Box>
  );
};

export default FavoriteTable;