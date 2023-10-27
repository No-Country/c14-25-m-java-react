import { PieChart, Pie, Sector, Cell,ResponsiveContainer, Tooltip } from "recharts";
import BottonGroupGraphicAmount from "./BottonGroupGraphicAmount";

function Graphic({p, datas, className}){
console.log(datas[0])
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#f4efff','#5706AC'];
  const data1=[
    { name: 'Group A', value: 100 },
    { name: 'Group B', value: 100 },
    { name: 'Group C', value: 900 },
    { name: 'Group D', value: 950 },
    { name: 'Group E', value: 950 },
    { name: 'Group F', value: 950 },
  ]



const PieChartWithPaddingAngles=(
  <ResponsiveContainer  >
<PieChart  >
  <Pie
  
 
    data={datas[0].salary ? data:data1}
    cx="50%"
    cy="50%"
    innerRadius={p=== null ? '74%': '65%'}
    outerRadius={p=== null ? '95%': '80%'}
    fill="#8884d8"
    paddingAngle={0}
    dataKey="value"
    stroke="none"
    

  >
    {data1.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    ))}
  </Pie>
  <Tooltip/> 
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
    <BottonGroupGraphicAmount className={className} />
    </div>
    }
    
    </>
)
}
export default Graphic