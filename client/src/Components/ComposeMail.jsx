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
  


const ComposeMail = ({openDialog,setOpenDialog}) => {

  const config = {
    Host : "smtp.elasticemail.com",
    Username : "cobimo6725@soombo.com",
    Password : "9AAB51080D9013AB8EB14DD66CECEABFB692",
    Port: 2525 ,
    
}

  const closeCompose =(e)=>{
    e.preventDefault();
    setOpenDialog(false);
  }

  const sendMail = () =>{

    if(window.Email){
      window.Email.send({
     ...config,
      To : 'them@website.com',
      From : "you@isp.com",
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );
}

   setOpenDialog(false);
  }

  return (
   <Dialog open={openDialog} PaperProps={{sx: diaglogStyle}}>
    <Header>
  <Typography>New Message</Typography>
  <Close fontSize='small' onClick={(e)=>closeCompose(e)}/>
    </Header>
    <RecipientsWrapper>
    <InputBase placeholder='Recipients' />
    <InputBase placeholder='Subject' />
    </RecipientsWrapper>
    <TextField multiline rows={25} sx={{"& .MuiOutlinedInput-notchedOutline": {border: "none"}}}/>
    <Footer>
      <SendButton onClick={()=> sendMail()}>Send</SendButton>
      <DeleteForeverOutlined onClick={()=> setOpenDialog(false)}/>
    </Footer>
   </Dialog>
  )
}

export default ComposeMail