import Asidebar from "./Asidebar"


const DefaultLayout = ({ children }) => {
  return (
    <>
      <main className="defaultLayout-main-container">
        <Asidebar/>
        {children}
      </main>

      <footer>
        <h1>Footer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, praesentium autem quae, eius ipsam odio alias quos libero, obcaecati repudiandae assumenda quas mollitia voluptate! Fugiat reprehenderit velit cumque a quas!</p>
      </footer>
    </>
  )
}

export default DefaultLayout