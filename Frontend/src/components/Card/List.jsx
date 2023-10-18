import Amount from "./Amounts"
function List(){

return(
    <div className="List">

    <ul className="ListDetail">
        <li>Nombre</li>
        <li>Categoria</li>
        <li>Monto</li>
        <li>Fecha</li>
        <li>Cuenta</li>
        <li>Notas</li>
        <li></li>
    </ul>
    <Amount p={true}/>
   
    <Amount p={true}/>
    <Amount p={true}/>
    
    </div>
)
}
export default List