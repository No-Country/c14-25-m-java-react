import GraphicPruebaT from "../components/Card/GraphicPruebaT"
import GraphicPruebaA from "../components/Card/GraphicPruebaA"

const HistoricalReports = () => {
    return (
      <>
      <div>HistoricalReports</div>
      <div className="GraphicPruebaT"><GraphicPruebaT  plabelLine={false}/></div>
      <div className="GraphicPruebaT"><GraphicPruebaT plabel={true}/></div>
      <h1>Este grafico tiene la lista de grupos que se posiciona con el <span style={{color:'red'}}>verticalAlign</span> puede tener los valores 'top', 'middle', 'bottom'<br /> 
      El contenido de la lista aun no se como manejarlo </h1>
      <div className="GraphicPruebaT"><GraphicPruebaT legend={true}  plabelLine={false}/></div>
      
      <GraphicPruebaA/>
      


      </>

    )
  }
  
  export default HistoricalReports