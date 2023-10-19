import { useState } from 'react'
import SvgAddGoal from '../assets/icons/SvgAddGoal'
import FormNewSavingsGoals from './Form/FormNewSavingsGoals';

const NewGoalButton = () => {
  const [stateModal, setStateModal] = useState(false);

  const handleStateModal = () => {
    setStateModal(!stateModal)
  }

  return (
    <>
      <button onClick={handleStateModal} className='newGoalButton-container'>
        <SvgAddGoal /> Nuevo
      </button>

      {
        stateModal ?
          <section className='newGoalModal-container'>

            <FormNewSavingsGoals handleStateModal={handleStateModal} />

            <section onClick={handleStateModal} className='newGoalModal-background'>

            </section>
          </section>
          : null
      }
    </>
  )
}

export default NewGoalButton