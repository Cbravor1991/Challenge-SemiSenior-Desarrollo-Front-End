import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';

const PageDetail = () => {
  const [postDetails, setPostDetails] = useState(null);

  useEffect(() => {
    const dataPost = JSON.parse(window.localStorage.getItem('selectedPost'));
    if (dataPost) {
      setPostDetails(dataPost);
    }
  }, []); 

  return (

     

      <Grid style={{ display: 'flex', justifyContent: 'center' }}>
        <Paper elevation={5} sx={{ maxwidth: '1200px', background: '#fff' }}>
          <Typography variant="h5" component="div" sx={{ padding: 2, fontSize: 30, fontWeight: 70, display: 'flex', justifyContent: 'center', fontFamily: 'Comic Sans MS, cursive' }}>
            {postDetails ? postDetails.title : 'Cargando datos ..'}
          </Typography>

          <CardContent sx={{ pb: 2, justifyContent: 'center' }}>
            {postDetails && (
              <>
                <Typography variant="body1" component="p" sx={{ fontSize: 20, marginBottom: '10px' }}>
                  ID: {postDetails.id}
                </Typography>
                <Typography variant="body1" component="p" sx={{ fontSize: 20, marginBottom: '10px' }}>
                  Completed: {postDetails.completed ? 'Yes' : 'No'}
                </Typography>
              </>
            )}
          </CardContent>
        </Paper>
      </Grid>
 
  );
}

export default PageDetail;
