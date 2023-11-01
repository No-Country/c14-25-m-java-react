/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import SvgGridView from "../assets/icons/SvgGridView";
import SvgPreviousExpenses from "../assets/icons/SvgPreviousExpenses";
import SvgSavingsGoals from "../assets/icons/SvgSavingsGoals";
import Logo from "./../assets/logo.png";
import SvgHistoricalReports from "../assets/icons/SvgHistoricalReports";
import SvgLogo from "../assets/icons/SvgLogo";

const Asidebar = () => {
  return (
    <>
        <aside className="asidebar-container">
          <section>
            <img src={Logo} alt="Logo oficial de presupuesto claro." />
            <section className="asidebar-logo-mobile">
                <SvgLogo />
            </section>
          </section>
          <nav>
            <ul>
              <NavLink onClick={()=>{localStorage.setItem("title", "Dashboard")}} to={"/"}><li > <SvgGridView /> <span>Dashboard</span> </li></NavLink>
              <NavLink onClick={()=>{localStorage.setItem("title", "Análisis")}}  to={"/analysis"}><li> <SvgPreviousExpenses /> <span>Análisis</span></li></NavLink>
              <NavLink onClick={()=>{localStorage.setItem("title", "Metas de ahorro")}} to={"/savings-goals"}><li> <SvgSavingsGoals /> <span>Metas de ahorro</span></li></NavLink>
              <NavLink onClick={()=>{localStorage.setItem("title", "Reportes históricos")}} to={"/historical-reports"}><li > <SvgHistoricalReports /> <span>Reportes históricos</span> </li></NavLink>
            </ul>
          </nav>
        </aside>
    </>
  )
}

export default Asidebar