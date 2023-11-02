import Amount from "./Amounts"
function List({amount,delet }){

return(
    <div className="List">

    <ul className="ListDetail">
        <li className="nombre">Nombre</li>
        <li>Categoria</li>
        <li>Monto</li>
        <li>Fecha</li>
        <li>Cuenta</li>
        <li>Notas</li>
        
    </ul>
    
    <Amount p={true} amount={amount} delet={delet} />   

    </div>
)
}
export default List