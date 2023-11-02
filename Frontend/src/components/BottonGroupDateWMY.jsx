import { useState } from "react"
function BottonGroupDateWMY (){
    const [date, setDate]=useState("2022")
    const [changeClass, setChangeClass]=useState("dateYear")
  
    function handleClick(fecha){
        
        if(fecha === "year"){
           setDate("2022")
           setChangeClass("dateYear")
        }else         if(fecha === "week"){
           setDate("23 al 29 de octubre")
           setChangeClass("dateWeek")
        }else        if(fecha === "month"){
           setDate("Octubre")
           setChangeClass("dateMonth")
        }
   }
  
    return (
    <article className="BottonGroupDateWMY">
        <h3>{date}</h3>
        <div  className='GroupDateWMY'>
            

            <button onClick={()=>{handleClick("week")}} id='Button'  className={changeClass==="dateWeek" && "dateWeek" }>Semana</button>
            <button onClick={()=>{handleClick("month")}} name="month" id='Button' className={changeClass==="dateMonth" && "dateMonth"}>Mes</button>
            <button onClick={()=>{handleClick ("year")}    } id='Button'  className={changeClass!=="dateYear" ? "": changeClass}>Año</button>
        </div>
       
    </article>
    )
}
export default BottonGroupDateWMY