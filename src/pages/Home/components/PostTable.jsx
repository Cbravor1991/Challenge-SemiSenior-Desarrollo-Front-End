import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../../../redux/states'
import { Checkbox, Button } from '@mui/material';
import CustomDialog, { dialogOpenSubject$ } from './CustomDialogHome'
import PageDetail from './Pagedetail';



const PostTable = () => {

  const [selectedPosts, setSelectedPosts] = useState([]);


  const dispatch = useDispatch();


  const posts = useSelector((state) => state.posts);
  const favoritePosts = useSelector((state) => state.favorites);


  const findPosts = (post) => {
    if (!favoritePosts) {
        return false;
    }


    return !!favoritePosts.find(p => p.id === post.id);
}

  const filterPosts = (post) => favoritePosts.filter(p => p.id !== post.id);

 
  const handleChange = (post) => {
    const filteredPosts = findPosts(post) ? filterPosts(post) : [...selectedPosts, post];
   
     dispatch(addFavorite(filteredPosts));
     
    setSelectedPosts(filteredPosts);
 };

 const handleClick = (row) => {
  window.localStorage.setItem('selectedPost', JSON.stringify(row));
  dialogOpenSubject$.setSubject = true;
}



 const columns = [
  {
    field: 'select', headerName: '', width: 120,
    renderCell: (params) => (
      <Checkbox
        size="small"
        checked={findPosts(params.row)}
        onChange={() => handleChange(params.row)} 
      />
    )
  },
    { field: 'id', headerName: 'ID', width: 90, renderCell: (params) => (
      <Button variant="text" onClick={() => handleClick(params.row)}    sx={{ padding: 0, minWidth: 'auto', color: 'black', fontFamily: 'Comic Sans MS, cursive' }}>
        {params.value}
      </Button>
    ) },
    { field: 'title', headerName: 'Title', width: 700, renderCell: (params) => (
      <Button variant="text" onClick={() => handleClick(params.row)}    sx={{ padding: 0, maWidth: 'auto', color: 'black', fontFamily: 'Comic Sans MS, cursive' }}>
        {params.value}
      </Button>  ) },
    { field: 'completed', headerName: 'Completed', width: 150,
      renderCell: (params) => (
        <Button
        variant="text"
        onClick={() => handleClick(params.row)} 
        sx={{ padding: 0, minWidth: 'auto', color: 'black', fontFamily: 'Comic Sans MS, cursive' }}
      >
        {params.value ? 'Yes' : 'No'}
      </Button>
      )
    },
  
  ];

  return (
    <>
    <CustomDialog>
    <PageDetail/>
    </CustomDialog>
    <Box   sx={{
      width: '80%', 
      maxWidth: '1200px', 
      margin: '0 auto', 
      height: 400,
      display: 'flex',
      justifyContent: 'center', 
      alignItems: 'center', 
    }}>





      <DataGrid
        rows={posts} 
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
    </>
  );
};

export default PostTable;