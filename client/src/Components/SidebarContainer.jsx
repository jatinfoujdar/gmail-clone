import { Box, Button ,styled} from '@mui/material';
import{CreateOutlined} from "@mui/icons-material"
import React from 'react'

const ComposeButton = styled(Button)({

  background: "#c2e7ff",
  color: "#001d35",
  textTransform: "none",
  borderRadius: 10,
  marginLeft: 20,
  marginTop: 20,
  padding: 10,

})

const SidebarContainer = () => {
  return (
    <Box>
      <Box>
        <ComposeButton>
        <CreateOutlined/>  Compose
        </ComposeButton>
      </Box>
      <Box></Box>
    </Box>
  )
}

export default SidebarContainer;