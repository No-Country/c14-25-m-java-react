import React, { useState } from 'react'
import FormEditSavingsGoals from './Form/FormEditSavingsGoals';

const CardSavingGoal = ({ id, title, total, amount, image }) => {
  const [stateModal, setStateModal] = useState(false);

  const handleStateModal = () => {
    setStateModal(!stateModal)
  }

  return (
    <>
      <article className='cardSavingGoal-container'>

        <section className='cardSavingGola-container-image'>
          <img width={200} src={image} alt="Imagen de la meta a cumplir." />
        </section>

        <section className='cardSavingGola-container-description'>
          <h3>{title}</h3>

          <button onClick={ handleStateModal }>
            $
            <span className='bolder'>{amount.toLocaleString("es-ES")}</span>
            /
            {total.toLocaleString("es-ES")}
          </button>
        </section>

      </article>

      {
        stateModal ?
          <section className='newGoalModal-container'>

            <FormEditSavingsGoals id={id} handleStateModal={handleStateModal} />

            <section onClick={handleStateModal} className='newGoalModal-background'>

            </section>
          </section>
          : null
      }
    </>
  )



}

export default CardSavingGoal