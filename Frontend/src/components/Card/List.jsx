import Amount from "./Amounts"
function List({amount, delet, download=false }){

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
    
    <Amount p={true} amount={amount} delet={delet} download={download}/>   

    </div>
)
}
export default List