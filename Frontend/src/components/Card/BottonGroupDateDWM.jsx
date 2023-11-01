import { useState } from "react"


function BottonGroupDateDWM() {
    const [date, setDate]=useState("Octubre")
    const [changeClass, setChangeClass]=useState("dateMonth")
  console.log(changeClass)
    function handleClick(fecha){
        
        if(fecha === "day"){
           setDate("26 de octubre")
           setChangeClass("dateDay")
        }else         if(fecha === "week"){
           setDate("23 al 29 de octubre")
           setChangeClass("dateWeek")
        }else        if(fecha === "month"){
           setDate("Octubre")
           setChangeClass("dateMonth")
        }
   }
  
    return (
    <>
        <h3>{date}</h3>
        <div  id='Group'>
            <button onClick={()=>{handleClick ("day")}    } id='Button'  className={changeClass==="dateDay" && "dateDay" }>Dia</button>
            <button onClick={()=>{handleClick("week")}} id='Button'  className={changeClass==="dateWeek" && "dateWeek" }>Semana</button>
            <button onClick={()=>{handleClick("month")}} name="month" id='Button' className={changeClass!=="dateMonth"?"":changeClass }>Mes</button>
        </div>
       
    </>
    )
}
export default BottonGroupDateDWM

