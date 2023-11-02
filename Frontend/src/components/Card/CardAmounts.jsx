import { useAmountDashboard } from "../../services/useAmountDashboard";

function CardAmount() {

const {dbE, increaseDBE, dbI, increaseDBI} = useAmountDashboard();

const income= dbI?.map((item) => {return item.amount}).reduce((a, b) => a + b, 0)
const egress= dbE?.map((item) => {return item.amount}).reduce((a, b) => a + b, 0)
console.log(dbE)
  return (
    <>
      <div className="CardAmount">
        <p>Ingresos</p>
        <p>
          <span>${income}</span>
        </p>
      </div>
      <div className="CardAmount">
        <p>Gastos</p>
        <p>
          <span className="CardAmount-Gasto">${egress}</span>
        </p>
      </div>
      <div className="CardAmount">
        <p>Balance del mes</p>
        <p>
          <span className="CardAmount-Balance">${income - egress}</span>
        </p>
      </div>
    </>
  );
}
export default CardAmount;
