import List from "./List"
import Graphic from "./Graphic"
import Amount from "./Amounts"
import Button from "../button"
function CardGraphics (){
    
return(
    <>  
    <div>
    <h2>octubre</h2>
    <Button /> 
    </div>
    <article className="cardGraphics-article">       
    
    <Graphic/>
    <Amount/>
    
    <List/>  
    </article>
    
    </>
)
}
export default CardGraphics