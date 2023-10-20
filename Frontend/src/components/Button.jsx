function Button({p}){
return(
    <>
    {p!==null ?
    <button className="addButton">+ Nuevo</button>
    :<button className="register-button">Inscribirse</button>}
    </>
)
}
export default Button