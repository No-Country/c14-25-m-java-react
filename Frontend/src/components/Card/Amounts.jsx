function Amount({p}) {
    return (
        <>
           { p? <ul className="Amount">
                <li>Pago de alquiler</li>
                <li>Renta</li>
                <li>60000</li>
                <li>1/10/2023</li>
                <li>efectivo</li>
                <li></li>
                <li>iconos</li>
                </ul>:
                <ul className="AmountDetail">
                
                <li>Renta</li>
                <li>60000</li>                
                </ul>
            }
        </>
    )
}
export default Amount