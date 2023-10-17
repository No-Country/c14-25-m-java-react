import React from 'react'
import SvgAddGoal from '../assets/icons/SvgAddGoal'

const NewGoalButton = () => {
  return (
    <button className='newGoalButton-container'>
        <SvgAddGoal/> Nuevo
    </button>
  )
}

export default NewGoalButton