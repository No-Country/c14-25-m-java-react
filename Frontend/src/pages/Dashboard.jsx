import React from 'react'
import CardGeneral from '../components/CardGeneral'
import Button from '../components/button'
const Dashboard = () => {
  return (
    <main className='dashboard'>
      <div>Dashboard</div>
      <section>
        <CardGeneral egreso={true} />
        <CardGeneral egreso={false} />
        
      </section>
      <Button/>
      <section>
      
      <CardGeneral egreso={null} />
      </section>
      

    </main>
  )
}

export default Dashboard