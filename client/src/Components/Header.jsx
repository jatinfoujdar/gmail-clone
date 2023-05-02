import React from 'react'
import {AppBar,Toolbar , styled,InputBase,Box} from "@mui/material";
import {Menu as MenuIcon,Search,Tune,HelpOutlineOutlined,SettingsSuggestOutlined, AppsOutageOutlined,AccountCircleOutlined } from "@mui/icons-material"
import { gmaillogo } from '../constant/constant';


const StyledAppBar = styled(AppBar)({
  background: "#F5F5F5",
  boxShadow: "none"

})
const SearchWrapper = styled(Box)({
  background: "#EAF1FB",
  marginLeft: 300,
  borderRadius: 10,
  minWidth: 690,
  maxWidth: 720,
  height: 38,
  "&>div":{
    width: "100%",
    padding: 10
  },
  justifyContent: "space-between",
  display: "flex",
  alignItems: "center",
  padding: "0 20px"
})
const OptionsWrapper =styled(Box)({
 width: "100%",
 display: 'flex',
 justifyContent: "end",
 "& > svg":{
  marginLeft: "20px"
 }
})




const Header = ({toggleDrawer }) => {
  return (
    <StyledAppBar position='static'>
      <Toolbar>
        <MenuIcon color='action'onClick={toggleDrawer}/>
        <img src={gmaillogo} style={{width: 110, marginLeft: 15}} alt="logo"/>
        <SearchWrapper >
        <Search color='action'/> 
        <InputBase placeholder='Search Mail' />
        <Tune color='action'/> 
        </SearchWrapper>
        <OptionsWrapper>
          <HelpOutlineOutlined color='action' />
          <SettingsSuggestOutlined color='action' />
          <AppsOutageOutlined color='action'/>
          <AccountCircleOutlined color='action'/>
        </OptionsWrapper>
      </Toolbar>
    </StyledAppBar>
  )
}

export default Header