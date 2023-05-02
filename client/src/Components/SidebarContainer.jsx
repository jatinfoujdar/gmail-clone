import { Box, Button ,styled,List, ListItem} from '@mui/material';
import{CreateOutlined} from "@mui/icons-material"
import React from 'react'
import { SIDEBAR_DATA } from '../config/sidebarConfig';

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
  return (
    <Container>
     
        <ComposeButton>
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
    </Container>
  )
}

export default SidebarContainer;