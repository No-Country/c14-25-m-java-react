import { useState } from "react"


function BottonGroupDateDWM() {
    const [date, setDate]=useState("Noviembre")
    const [changeClass, setChangeClass]=useState("dateMonth")
  console.log(changeClass)
    function handleClick(fecha){
        
        if(fecha === "day"){
           setDate("3 de noviembre")
           setChangeClass("dateDay")
        }else         if(fecha === "week"){
           setDate("30 de oct al 5 de noviembre")
           setChangeClass("dateWeek")
        }else        if(fecha === "month"){
           setDate("Noviembre")
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

