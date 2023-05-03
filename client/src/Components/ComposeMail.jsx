import React from 'react';
import { Dialog } from '@mui/material';


const diaglogStyle={
    height: "90%",
    width: "80%",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
    borderRadius: "10px 10px 0 0"
}

const ComposeMail = () => {
  return (
   <Dialog open={true} PaperProps={{sx: diaglogStyle}}>
    hello
   </Dialog>
  )
}

export default ComposeMail