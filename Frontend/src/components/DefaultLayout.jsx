import { Outlet } from "react-router-dom"
import Asidebar from "./Asidebar"


const DefaultLayout = () => {
  return (
    <>
      <main className="defaultLayout-main-container">
        <Asidebar/>
        <Outlet />
      </main>

      <footer>
        <h1>Footer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, praesentium autem quae, eius ipsam odio alias quos libero, obcaecati repudiandae assumenda quas mollitia voluptate! Fugiat reprehenderit velit cumque a quas!</p>
      </footer>
    </>
  )
}

export default DefaultLayout