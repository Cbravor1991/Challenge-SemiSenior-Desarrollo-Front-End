import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { SubjectManager } from '../../models';
import { Subscription } from 'rxjs';

export const dialogOpenSubject$ = new SubjectManager();
export const dialogCloseSubject$ = new SubjectManager();

export const CustomDialog = ({ children }) => {
  const [open, setOpen] = useState(false);
  let openSubject$ = new Subscription();
  let closeSubject$ = new Subscription();

  useEffect(() => {
    openSubject$ = dialogOpenSubject$.getSubject.subscribe(() => handleClickOpen());
    closeSubject$ = dialogCloseSubject$.getSubject.subscribe(() => handleClose());
    return () => {
      openSubject$.unsubscribe();
      closeSubject$.unsubscribe();
    };
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleExit = () => {

    dialogCloseSubject$.setSubject = false; 
  };

  return (
    <div>
       <Dialog
      open={open}
      onClose={() => handleExit()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        '& .MuiDialog-paper': {
          width: 'auto',
          maxWidth: 'none',
        },
      }}
      maxWidth="md"
      fullWidth
    >
      {children}
    </Dialog>
    </div>
  );
};

export default CustomDialog;
