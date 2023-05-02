import React from 'react'
import {AppBar,Toolbar , styled,InputBase,Box} from "@mui/material";
import {Menu as MenuIcon,Search,Tune } from "@mui/icons-material"
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
  
  justifyContent: "space-between",
  display: "flex",
  alignItems: "center",
  padding: "0 20px"
})

const Header = () => {
  return (
    <StyledAppBar position='static'>
      <Toolbar>
        <MenuIcon color='action'/>
        <img src={gmaillogo} style={{width: 110, marginLeft: 15}} alt="logo"/>
        <SearchWrapper >
        <Search color='action'/> 
        <InputBase />
        <Tune color='action'/> 
        </SearchWrapper>
      </Toolbar>
    </StyledAppBar>
  )
}

export default Header