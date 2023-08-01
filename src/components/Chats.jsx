import React from 'react'
import '../styles/Chats.css'
import { Bag } from 'react-iconly'

const Chats = () => {
  return (
    <div className='chats-container'>
      <div className='chats-header'>
<img className='pop-image' src='https://res.cloudinary.com/dzzohccd8/image/upload/v1690868142/assessment%20images/Rectangle_3_2_ddjtmi.png' />
<div className='popchat-space'>


<div className='popname-status'>
    <h3 className='popchat-name'>Jane Doe</h3>
    <div className='popstatus-time'>
        <p className='online'><span className='online-color'></span>Online</p>
        <p className='pop-time'>12:55 am</p>
    </div>

</div>
<div className='customer-chat'>
    <p className='new-customer'>
New Customer
    </p>
    <div className='chatview-orders'>
        <p className='view-profile'>View Profile</p>
        <div className='icon-orders'>
        <Bag set="light"  />
        <p className='zero-orders'>0 Orders</p>
        </div>
        
    </div>
</div>
</div>

      </div>
      <div className='chats-body'>

      </div>
    </div>
  )
}

export default Chats
