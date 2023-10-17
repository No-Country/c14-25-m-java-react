import { useState } from "react"
import CardAmount from "./CardAmounts"
import CardGraphics from "./CardGraphics"
function Card({egreso}){
 
return(
    <>
    {egreso!==null ? <CardAmount egreso={egreso}/>:<CardGraphics/> }
     
    </>
)
}
export default Card