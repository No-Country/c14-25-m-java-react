import { PieChart, Pie, Sector, Cell,ResponsiveContainer, Tooltip, LabelList } from "recharts";
import BottonGroupGraphicAmount from "./BottonGroupGraphicAmount";
import { useAmountDashboard } from "../../services/useAmountDashboard";
function Graphic({p, amount, changeClass,  income, egress}){

 
  const COLORS = ['#F24822','#0088FE',  '#5706AC','#0D99FF',  '#FFA629','#FFCD29',"#14AE5C", "#7E07FA"];
 


const PieChartWithPaddingAngles=(
  <ResponsiveContainer  >
<PieChart  >
  <Pie  
    data={amount}
    cx="50%"
    cy="50%"
    innerRadius={p=== null ? '74%': '65%'}
    outerRadius={p=== null ? '95%': '80%'}
    fill="#8884d8"

    paddingAngle={0}
    dataKey="amount"
    stroke="none"
    startAngle={90}
    endAngle={-360}
    labelLine={false}
    label={p!==null && true}       
            

  >
    {amount?.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    ))}
  </Pie>
 
  
</PieChart>
</ResponsiveContainer>)

return(
    <> 
     
      {p!==null ?  <>
        {/*<ul className="Graphic-ul">
            <li><h3>Julio</h3></li>
            <li>Gasto: 390.103</li>
      </ul>  ES PARA MPSTRAR A DENIS COMO QUEDA DENTRO O SI LO CAMBIA*/}
       <div className="Graphic">{PieChartWithPaddingAngles}</div>
   </>
    : 

    <div className="Graphic-date">
    <h3>Julio <button>Ver todo</button></h3>
    
    <div className="Graphic">{PieChartWithPaddingAngles}</div>
    <BottonGroupGraphicAmount changeClass={changeClass}  income={ income} egress={ egress} />
    </div>
    }
    
    </>
)
}
export default Graphic