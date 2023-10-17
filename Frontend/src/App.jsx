import { Route, Routes } from "react-router-dom"
import DefaultLayout from "./components/DefaultLayout"
import Dashboard from "./pages/Dashboard"
import PreviousExpenses from "./pages/PreviousExpenses"

function App() {
  
  return (
    <>

      <Routes>
        
        <Route path="/" element={<DefaultLayout />}>

          <Route index element={<Dashboard/>}/>

          <Route path="/previous-expenses" element={<PreviousExpenses />}/>

        </Route>
      
      </Routes>
    </>
  )

}

export default App
