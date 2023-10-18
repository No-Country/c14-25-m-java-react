import AreaChartComponent from "../components/AreaChartComponent"
import CardSavingGoal from "../components/CardSavingGoal"
import DefaultSectionLayout from "../components/DefaultSectionLayout"
import goals_image_1 from "./../assets/goals_image_1.jpeg"
import goals_image_2 from "./../assets/goals_image_2.jpeg"
import goals_image_3 from "./../assets/goals_image_3.jpeg"

const SavingsGoals = () => {
  const savingsGoals = [
    {
      id: 1,
      title: "Comprar Auto",
      amount: 5000,
      total: 700000,
      image: goals_image_1
    },
    {
      id: 2,
      title: "Renovación de la cocina",
      amount: 100000,
      total: 160000,
      image: goals_image_2
    },
    {
      id: 3,
      title: "Viaje con la familia",
      amount: 9700,
      total: 400000,
      image: goals_image_3
    }, {
      id: 4,
      title: "Comprar Auto",
      amount: 5000,
      total: 700000,
      image: goals_image_1
    },
    {
      id: 5,
      title: "Renovación de la cocina",
      amount: 100000,
      total: 160000,
      image: goals_image_2
    },
    {
      id: 6,
      title: "Viaje con la familia",
      amount: 9700,
      total: 400000,
      image: goals_image_3
    },
  ]

  return (
    <>
      <DefaultSectionLayout title={"Ahorro"}>

        <section className="savingsGoals-container">
          <AreaChartComponent />
        </section>

      </DefaultSectionLayout>

      <DefaultSectionLayout title={"Metas de ahorro"} isButton={true}>

        <section className="savingsGoals-container-cards">

          {
            savingsGoals?.map((item) => {
              return (
                <CardSavingGoal key={item.id} title={item.title} amount={item.amount} total={item.total} image={item.image} />
              )
            })
          }

        </section>

      </DefaultSectionLayout>

      

    </>
  )
}

export default SavingsGoals