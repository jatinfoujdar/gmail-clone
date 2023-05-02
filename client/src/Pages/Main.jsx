import React, { useState } from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'


const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(true)
  const toggleDrawer =()=>{
    setOpenDrawer(prevState => !prevState)
  }
  return (
    <div>
    <Header toggleDrawer={toggleDrawer}/>
    <Sidebar openDrawer={openDrawer}/>
    <div>Display Main</div>
    </div>
  )
}

export default Main