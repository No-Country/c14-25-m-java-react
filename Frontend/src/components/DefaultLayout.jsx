import { Outlet } from "react-router-dom"
import Asidebar from "./Asidebar"
import Header from "./Header"


const DefaultLayout = () => {
  return (
    <>
      <section className="defaultLayout-main-container">
        <Asidebar/>
        <section className="defaultLayout-main-section">
          <Header />
          <Outlet />
        </section>
      </section>
    </>
  )
}

export default DefaultLayout