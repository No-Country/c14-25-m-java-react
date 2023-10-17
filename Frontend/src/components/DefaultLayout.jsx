import { Outlet } from "react-router-dom"
import Asidebar from "./Asidebar"


const DefaultLayout = () => {
  return (
    <>
      <section className="defaultLayout-main-container">
        <Asidebar/>
        <Outlet />
      </section>      
    </>
  )
}

export default DefaultLayout