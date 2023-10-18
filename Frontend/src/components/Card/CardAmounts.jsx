function CardAmount({ egreso }) {
   return (<>
      {egreso ? <div className="CardAmount"><p>ingreso</p><p>$520.102,00</p></div> : <div className="CardAmount"><p>gasto</p><p>$520.102,00</p></div>}
   </>)
}
export default CardAmount