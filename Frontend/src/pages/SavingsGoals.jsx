import AreaChartComponent from "../components/AreaChartComponent"
import CardSavingGoal from "../components/CardSavingGoal"
import DefaultSectionLayout from "../components/DefaultSectionLayout"
import { useNewSavingsGoals } from "../services/useNewSavingsGoals"

const SavingsGoals = () => {
  
  const {db} = useNewSavingsGoals();

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
            db?.map((item) => {
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