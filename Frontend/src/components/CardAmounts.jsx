function CardAmount({egreso}){
   return   ( <>
   {egreso ? <div className="card"><p>ingreso</p><p>$520.102,00</p></div> :<div className="card"><p>gasto</p><p>$520.102,00</p></div> }
   </>)
}
export default CardAmount