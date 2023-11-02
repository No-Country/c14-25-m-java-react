import { Route, Routes } from "react-router-dom"
import DefaultLayout from "./components/DefaultLayout"
import Dashboard from "./pages/Dashboard"
import PreviousExpenses from "./pages/PreviousExpenses"
import SavingsGoals from "./pages/SavingsGoals"
import HistoricalReports from "./pages/HistoricalReports"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
localStorage.setItem("title", "Dashboard")
  return (
    <>

      <Routes>

        <Route path="/" element={<DefaultLayout />}>


          <Route index element={<Dashboard />} />

          <Route path="/analysis" element={<PreviousExpenses />} />

          <Route path="/savings-goals" element={<SavingsGoals />} />

          <Route path="/historical-reports" element={<HistoricalReports />} />


        </Route>

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />




      </Routes>
    </>
  )

}

export default App
