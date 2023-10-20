import { PieChart, Pie, Sector, Cell,ResponsiveContainer, Tooltip } from "recharts";

function Graphic({p}){
  
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const PieChartWithPaddingAngles=(
  <ResponsiveContainer >
<PieChart  >
  <Pie
  
 
    data={data}
    cx="50%"
    cy="50%"
    innerRadius={p=== null ? '74%': '65%'}
    outerRadius={p=== null ? '95%': '80%'}
    fill="#8884d8"
    paddingAngle={0}
    dataKey="value"
    stroke="none"
    

  >
    {data.map((entry, index) => (
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
    <div className="Graphic">{PieChartWithPaddingAngles}</div></>
    : 
    <div className="Graphic-date">
    <h3>Julio <span>Gasto: 60.000</span></h3>
    <div className="Graphic">{PieChartWithPaddingAngles}</div>
    </div>
    }
    
    </>
)
}
export default Graphic