import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Button } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CustomDialog, { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';
import { useSelector } from 'react-redux';
import {FavoriteTable} from './FavoriteTable';

function ResponsiveAppBar() {

  useSelector ((state)=> state.favorites);
  const handleClick = () => {

    dialogOpenSubject$.setSubject = true;
}


  return (
    <>
    <CustomDialog>
    <FavoriteTable/>
    </CustomDialog>
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>                
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
               
                // alineo el titulo en el medio
                textAlign: 'center',
                flexGrow: 1,
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)' 
              
              
               
              }}
            >
              PRUEBA TECNICA
            </Typography>
       
    
          <Button variant="contained" onClick = {handleClick} sx={{ backgroundColor: '#1DB954',  cursor: 'pointer',
                transition: 'background-color 0.3s',
                '&:hover': {
                  backgroundColor: '#17a94a',
                },
                marginLeft: 'auto' }}
                >
              VER FAVORITOS
            </Button>
       
        </Toolbar>
        
      </Container>
      
    </AppBar>
    </>
  );
}

export default ResponsiveAppBar;
