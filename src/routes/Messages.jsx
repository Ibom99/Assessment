import React from 'react'
import "../styles/Messages.css"
import SideBar from '../components/sideBar'
import TopBar from '../components/topBar'
import MessageContainer from '../components/messageContainer'

const Messages = () => {
  return (
    <div className='messages-display'>
      <div className='sidebar'>
      <SideBar />
      </div>
     
     
     <div className='messages-content'>
     <TopBar />
     <MessageContainer />
     </div>

    
   
     
     
     
    </div>
  )
}

export default Messages
