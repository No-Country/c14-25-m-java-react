import React from 'react'

import CardAmount from "../components/Card/CardAmounts"
import CardGraphics from "../components/Card/CardGraphics"

import Graphic from '../components/Card/Graphic'
import RegisterForm from '../components/RegisterForm'
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
      <h2>Gastos anteriores</h2>
      <article  className='dashboard-third-article'>      
      <Graphic p={null}/>
      <Graphic p={null}/>
      <Graphic p={null}/>
      </article>
      <RegisterForm/>


    </article>
  )
}

export default Dashboard