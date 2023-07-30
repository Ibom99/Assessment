import React from 'react'
import '../styles/DashboardContainer.css'

const DashboardContainer = () => {
  return (
    <div className='dashboard-content-container'>
     
      <div className='dashboard-analytics'>
<div className='week'>
<p>Sales</p>
</div>
<div className='week-one'>
<p>Customers</p>
</div>
<div className='week-two'>
<p>Orders</p>
</div>
<div className='marketing'>
<p>Marketing</p>
</div>
<div className='products'>
<p>All products</p>
</div>
<div className='cart'>
<p>Abandoned Carts</p>

</div>
<div className='orders'>
<p>Recent Order</p>

</div>
<div className='summary'>
<p>Summary</p>

</div>
      </div>
    </div>
  )
}

export default DashboardContainer
