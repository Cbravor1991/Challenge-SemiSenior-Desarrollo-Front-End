import * as React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Navbar from '../components/NavBar';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';


const PageDetail = () => {
  



  return (

    <Box sx={{ mb: 4, justifyContent: 'center', backgroundColor: 'black' }}>
    
      <Navbar />

      <Typography variant="h5" component="div" sx={{ marginTop: '10px', color: 'black', fontSize: 16, fontWeight: 700, mb: 2, display: 'flex', justifyContent: 'center' }}>
        Confirme los datos del evento
      </Typography>

      <Grid style={{ display: 'flex', justifyContent: 'center' }}>
        <Paper elevation={5} sx={{width: '600px', background: '#fff'}}>

          <Typography variant="h5" component="div" sx={{ padding: 2, fontSize: 30, fontWeight: 70, display: 'flex', justifyContent: 'center' }}>
            PROBANDO
          </Typography>

          <CardContent sx={{ pb: 2, justifyContent: 'center' }}>

          
          </CardContent>

         
        </Paper>
      </Grid>

    </Box>

  )
}

export default PageDetail

