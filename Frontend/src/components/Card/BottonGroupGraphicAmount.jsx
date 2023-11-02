
function BottonGroupGraphicAmount({changeClass, income, egress, }){
    return(
        <div className="BottonGGA">
            <button onClick={income} className={changeClass &&"blue"} >Ingreso: $ 450.038</button>
            <button onClick={egress} className={!changeClass &&"red"} >Egreso: $ 450.038</button>
        </div>
    )
}
export default BottonGroupGraphicAmount