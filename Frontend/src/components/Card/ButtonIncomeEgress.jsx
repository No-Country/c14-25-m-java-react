function ButtonIncomeEgress({ amount,changeClass, income, egress, formTrue, reset}){
    return(
        <>
        <div className="tabs">
            <button
              onClick={() => {
                reset(); income()
              }}
              className={`${changeClass ? "blue" : ""} ${formTrue ? "formDashboard-modalTabs" : ""} `}
         
            >
              Ingreso
             
            </button>
            <button
              onClick={() => {
                reset() ;egress()
              } }
              className={`${!changeClass ? "red": ""} ${formTrue ? "formDashboard-modalTabs" : ""}  `}
            >
              Egreso
            </button>
          </div></>
    )
}
export default ButtonIncomeEgress