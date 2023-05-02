import React from 'react';
import { Drawer,styled } from '@mui/material';

const Sidebar = () => {
  return (
   <Drawer anchor='left' open={true} hideBackdrop={true} ModalProps={{keepMounted: true}} variant='persistent' sx={{"& .MuiDrawer-paper":{
    marginTop: "64px",
    width: 250,
    background: "#F5F5F5",
    borderRight: "none",
    height: "cal(100vh-64px)"
   }}}>
hello
   </Drawer>
  )
}

export default Sidebar