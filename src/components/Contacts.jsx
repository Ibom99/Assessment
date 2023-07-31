import React from 'react'
import '../styles/Contacts.css'
import { Search } from 'react-iconly'

const Contacts = () => {
  return (
    <div className='contacts-container'>
        <div className='contacts-header'>
<div className='contacts-title'>
    <h3>Contacts</h3>
    <div className='contacts-amount'>34</div>
</div>
<div className='contacts-search'>
<Search set="light" primaryColor="black"/>
<input className='contacts-input' type='text' placeholder='Search' />
</div>

        </div>
        <div className='contact-list'>

        </div>
      
    </div>
  )
}

export default Contacts
