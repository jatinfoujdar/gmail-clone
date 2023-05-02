import React from 'react';
import { Drawer } from '@mui/material';
import SidebarContainer from './SidebarContainer';

const Sidebar = ({openDrawer}) => {
  return (
   <Drawer anchor='left' open={openDrawer} hideBackdrop={true} ModalProps={{keepMounted: true}} variant='persistent' sx={{"& .MuiDrawer-paper":{
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