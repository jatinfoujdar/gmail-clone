import { Box, Button ,styled,List, ListItem} from '@mui/material';
import{CreateOutlined} from "@mui/icons-material"
import React, { useState } from 'react'
import { SIDEBAR_DATA } from '../config/sidebarConfig';
import ComposeMail from './ComposeMail';

const ComposeButton = styled(Button)({

  background: "#c2e7ff",
  color: "#001d35",
  textTransform: "none",
  borderRadius: 10,
  marginLeft: 20,
  marginTop: 20,
  padding: 10,

})

const Container = styled(Box)({
  padding: 10,
  "&>ul":{
    padding: "10px 0 0 5px",
    fontSize: 14,
    fontWeight: 500,
    corsor: "pointer",
    },
    "&>ul>li>svg":{
      marginRight: 20,
    }
})

const SidebarContainer = () => {
  const[openDialog,setOpenDialog] = useState(false)

  const onComposeClick=()=>{
    setOpenDialog(true);
  }
  return (
    <Container>
     
        <ComposeButton onClick={()=> onComposeClick()}>
        <CreateOutlined/>  Compose
        </ComposeButton>
    
     <List>
      {
        SIDEBAR_DATA.map(data =>(
          <ListItem>
            <data.icon fontSize="small"/>{data.title}
          </ListItem>
        ))
      }
     </List>
     <ComposeMail openDialog={openDialog}/>
    </Container>
  )
}

export default SidebarContainer;