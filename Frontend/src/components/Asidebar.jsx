/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import SvgError from "../assets/icons/SvgError";
import SvgGridView from "../assets/icons/SvgGridView";
import SvgPreviousExpenses from "../assets/icons/SvgPreviousExpenses";
import SvgSavingsGoals from "../assets/icons/SvgSavingsGoals";
import Logo from "./../assets/logo.png";
import SvgHistoricalReports from "../assets/icons/SvgHistoricalReports";

const Asidebar = () => {
  return (
    <>
        <aside className="asidebar-container">
          <section>
            <img src={Logo} alt="Logo oficial de presupuesto claro." />
          </section>
          <nav>
            <ul>
              <NavLink to={"/"}><li > <SvgGridView /> Dashboard </li></NavLink>
              <NavLink to={"/previous-expenses"}><li> <SvgPreviousExpenses /> Gastos anteriores </li></NavLink>
              <NavLink to={"/savings-goals"}><li> <SvgSavingsGoals /> Metas de ahorro </li></NavLink>
              <NavLink to={"/historical-reports"}><li > <SvgHistoricalReports /> Reportes históricos </li></NavLink>
            </ul>
          </nav>
        </aside>
    </>
  )
}

export default Asidebar