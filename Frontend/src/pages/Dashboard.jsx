import React from 'react'

import CardAmount from "../components/Card/CardAmounts"
import CardGraphics from "../components/Card/CardGraphics"
import Button from '../components/button'
const Dashboard = () => {
  return (
    <article className='dashboard'>

      <article className='dashboard-first-article'>
        <CardAmount egreso={true} />
        <CardAmount egreso={false} />
        <CardAmount egreso={false} />
      </article>
      
      <article  className='dashboard-second-article'>
      
      <CardGraphics egreso={null} />
      </article>


    </article>
  )
}

export default Dashboard