import { Route, Routes } from "react-router-dom"
import DefaultLayout from "./components/DefaultLayout"
import Dashboard from "./pages/Dashboard"
import PreviousExpenses from "./pages/PreviousExpenses"
import SavingsGoals from "./pages/SavingsGoals"
import HistoricalReports from "./pages/HistoricalReports"

function App() {

  return (
    <>

      <Routes>

        <Route path="/" element={<DefaultLayout />}>


          <Route index element={<Dashboard />} />

          <Route path="/previous-expenses" element={<PreviousExpenses />} />

          <Route path="/savings-goals" element={<SavingsGoals />} />

          <Route path="/historical-reports" element={<HistoricalReports />} />

        </Route>

      </Routes>
    </>
  )

}

export default App
