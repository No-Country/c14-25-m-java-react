import Amount from "./Amounts"
function List({amount}){

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
    
    <Amount p={true} amount={amount}/>   

    </div>
)
}
export default List