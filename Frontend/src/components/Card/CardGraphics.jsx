import List from "./List"
import Graphic from "./Graphic"
import Amount from "./Amounts"


function CardGraphics({data}) {
    console.log(data)
    
   
    
    return (
        <>
        
            <article className="cardGraphics-article">
                <div className="cardGraphics-article-div" >
                   
                    <div className="graphicsAndList">
                    <Graphic datas={data} />
                    <section className="cardGraphics-article-div-section">
                        <Amount data={data}/>
                        <Amount data={data} />
                        <Amount data={data} />
                    </section>
                    </div>
                </div>
                <List data={data}  />
            </article>

        </>
    )
}
export default CardGraphics