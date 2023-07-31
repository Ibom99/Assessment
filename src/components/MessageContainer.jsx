import React from 'react'
import '../styles/MessageContainer.css'
import Contacts from './Contacts'
import Chats from './Chats'

const MessageContainer = () => {
  return (
    <div className="message-content-container">
      <div className='message-content'>
<div className='message-header'>
  <h1 className='message-title'>Conversations with Customers</h1>
  <button className='send-message'>New Message</button>
</div>

<div className='message-components'>
<Contacts />
<Chats />
</div>
      </div>
    </div>
  )
}

export default MessageContainer
