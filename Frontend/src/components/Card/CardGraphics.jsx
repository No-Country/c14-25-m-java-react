import List from "./List"
import Graphic from "./Graphic"
import Amount from "./Amounts"
import Button from "../button"
function CardGraphics (){
    
return(
    <>  
    <div className="cardGraphics-div">
    <h2>octubre</h2>
    <Button /> 
    </div>

    <article className="cardGraphics-article">         
    <div className="cardGraphics-article-div" >
    <Graphic/>
    <Amount/>   
    </div> 
    <List/>  
    </article>
    
    </>
)
}
export default CardGraphics