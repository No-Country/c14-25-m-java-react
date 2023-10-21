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
              <NavLink to={"/"}><li > <SvgGridView /> <span>Dashboard</span> </li></NavLink>
              <NavLink to={"/previous-expenses"}><li> <SvgPreviousExpenses /> <span>Gastos anteriores</span></li></NavLink>
              <NavLink to={"/savings-goals"}><li> <SvgSavingsGoals /> <span>Metas de ahorro</span></li></NavLink>
              <NavLink to={"/historical-reports"}><li > <SvgHistoricalReports /> <span>Reportes históricos</span> </li></NavLink>
            </ul>
          </nav>
        </aside>
    </>
  )
}

export default Asidebar