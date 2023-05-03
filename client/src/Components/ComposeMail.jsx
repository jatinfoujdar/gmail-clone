import React from 'react';
import { Dialog,Box ,Typography,styled, InputBase, TextField, Button } from '@mui/material';
import { Close,DeleteForeverOutlined } from '@mui/icons-material';



const diaglogStyle={
    height: "90%",
    width: "80%",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
    borderRadius: "10px 10px 0 0"
}

const Header = styled(Box)({
    display: 'flex',
    justifyContent: "space-between",
    padding: "10px 15px",
    background: "#f2f6fc"
    
})
const RecipientsWrapper = styled(Box)({
   display: "flex",
   flexDirection: "column",
   padding: "0 15px",
   "&>div":{
    fontSize: 14,
    borderBottom: "1px solid #F5F5F5",
    marginTop: 10
   }
   
})

const Footer = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 15px",
    alignItems: "center"
})

const SendButton = styled(Button)({

    background: "#0B57D0",
    color: "#fff",
    fontWeight: "bold",
    textTransform: "none",
    borderRadius: 18,
    width: "100"
})

const ComposeMail = ({openDialog}) => {
  return (
   <Dialog open={openDialog} PaperProps={{sx: diaglogStyle}}>
    <Header>
  <Typography>New Message</Typography>
  <Close fontSize='small'/>
    </Header>
    <RecipientsWrapper>
    <InputBase placeholder='Recipients' />
    <InputBase placeholder='Subject' />
    </RecipientsWrapper>
    <TextField multiline rows={25} sx={{"& .MuiOutlinedInput-notchedOutline": {border: "none"}}}/>
    <Footer>
      <SendButton>Send</SendButton>
      <DeleteForeverOutlined/>
    </Footer>
   </Dialog>
  )
}

export default ComposeMail