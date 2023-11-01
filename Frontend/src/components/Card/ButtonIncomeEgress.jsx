function ButtonIncomeEgress({ amount,changeClass, income, egress, formTrue, reset}){
    return(
        <>
        <div className="tabs">
            <button
              onClick={() => {
                income();reset() 
              }}
              className={`${changeClass ? "blue" : ""} ${formTrue ? "formDashboard-modalTabs" : ""} `}
         
            >
              Ingreso
             
            </button>
            <button
              onClick={() => {
                egress();reset() 
              } }
              className={`${!changeClass ? "red": ""} ${formTrue ? "formDashboard-modalTabs" : ""}  `}
            >
              Egreso
            </button>
          </div></>
    )
}
export default ButtonIncomeEgress