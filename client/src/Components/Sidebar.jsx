import React from 'react';
import { Drawer,styled } from '@mui/material';
import SidebarContainer from './SidebarContainer';

const Sidebar = () => {
  return (
   <Drawer anchor='left' open={true} hideBackdrop={true} ModalProps={{keepMounted: true}} variant='persistent' sx={{"& .MuiDrawer-paper":{
    marginTop: "64px",
    width: 250,
    background: "#F5F5F5",
    borderRight: "none",
    height: "cal(100vh-64px)"
   }}}>
<SidebarContainer/>
   </Drawer>
  )
}

export default Sidebar