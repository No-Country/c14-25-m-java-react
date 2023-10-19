import React from 'react'

const CardSavingGoal = ({title, total, amount, image}) => {
  return (
    <article className='cardSavingGoal-container'>

        <section className='cardSavingGola-container-image'>
            <img width={200} src={image} alt="Imagen de la meta a cumplir." />
        </section>

        <section className='cardSavingGola-container-description'>
            <h3>{title}</h3>

            <button>
                $
                <span className='bolder'>{amount.toLocaleString("es-ES")}</span>
                /
                {total.toLocaleString("es-ES")}
            </button>
        </section>

    </article>
  )
}

export default CardSavingGoal