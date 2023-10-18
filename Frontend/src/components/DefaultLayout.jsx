import { Outlet } from "react-router-dom"
import Asidebar from "./Asidebar"
import Header from "./Header"


const DefaultLayout = () => {
  return (
    <>
      <div className="defaultLayout-main-container">
        <Asidebar/>
        <main className="defaultLayout-main-section">
          <Header />
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default DefaultLayout