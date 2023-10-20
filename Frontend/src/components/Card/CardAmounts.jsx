function CardAmount({ egreso }) {
   return (<>
      {egreso ? 
      <div className="CardAmount">
         <p>Ingreso</p><p><span>$520.102,00</span></p>
         </div> 
         : <div className="CardAmount">
            <p>Gasto</p><p><span className="CardAmount-Gasto">$520.102,00</span></p>
            </div>}
   </>)
}
export default CardAmount