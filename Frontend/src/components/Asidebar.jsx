/* eslint-disable react/prop-types */
import SvgError from "../assets/icons/SvgError";
import SvgGridView from "../assets/icons/SvgGridView";
import SvgPreviousExpenses from "../assets/icons/SvgPreviousExpenses";
import SvgSavingsGoals from "../assets/icons/SvgSavingsGoals";
import Logo from "./../assets/logo.png";

const Asidebar = () => {
  return (
    <>
        <aside className="asidebar-container">
          <section>
            <img src={Logo} alt="Logo oficial de presupuesto claro." />
          </section>
          <nav>
            <ul>
              <li> <SvgGridView /> Dashboard </li>
              <li> <SvgPreviousExpenses /> Gastos anteriores </li>
              <li> <SvgSavingsGoals /> Metas de ahorro </li>
              <li> <SvgError /> Reportes históricos </li>
            </ul>
          </nav>
        </aside>
    </>
  )
}

export default Asidebar