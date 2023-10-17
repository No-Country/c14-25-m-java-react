/* eslint-disable react/prop-types */
import SvgError from "../assets/icons/SvgError";
import SvgGridView from "../assets/icons/SvgGridView";
import SvgPreviousExpenses from "../assets/icons/SvgPreviousExpenses";
import SvgSavingsGoals from "../assets/icons/SvgSavingsGoals";
import Logo from "./../assets/logo.png";
import { Link } from "react-router-dom"
const Asidebar = () => {
  return (
    <>
        <aside className="asidebar-container">          
          <nav>
            <ul>   
              <Link to="/" className=""><img src={Logo} alt="Logo oficial de presupuesto claro." /></Link>           
              <li> <Link to="/" className=""><SvgGridView /> Dashboard </Link></li>
              <li>  <Link to="/previous-expenses" className=""><SvgPreviousExpenses /> Gastos anteriores</Link></li>
              <li>  <Link to="/savings-goals" className=""><SvgSavingsGoals /> Metas de ahorro </Link></li>
              <li>  <Link to="/historical-reports" className=""><SvgError /> Reportes históricos</Link> </li>
            </ul>
          </nav>
        </aside>
    </>
  )
}

export default Asidebar