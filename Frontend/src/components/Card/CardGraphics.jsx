import List from "./List"
import Graphic from "./Graphic"
import Amount from "./Amounts"


function CardGraphics({amount}) {
    console.log(amount[4])
    
   
    
    return (
        <>
        
            <article className="cardGraphics-article">
                <div className="cardGraphics-article-div" >
                   
                    <div className="graphicsAndList">
                    <Graphic amount={amount} />
                    <section className="cardGraphics-article-div-section">
                        <Amount amount={amount}/>                      
                    </section>
                    </div>
                </div>
                <List amount={amount}  />
            </article>

        </>
    )
}
export default CardGraphics