import { PieChart, Pie, Sector, Cell,ResponsiveContainer, Tooltip,Legend } from "recharts";

function GraphicPruebaT({p,legend, plabel, plabelLine}){
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
      const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )};
 
    const PieChartWithPaddingAngles=(
        <ResponsiveContainer >
      <PieChart  >
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={p=== null ? '74%': '65%'}
          outerRadius={p=== null ? '95%': '90%'}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          stroke="none"
          label={plabel? plabel : renderCustomizedLabel}
          labelLine={plabelLine}
          
 
      
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip/> 
        {legend && <Legend iconSize={10} layout="vertical" verticalAlign="middle"  />}

 
      </PieChart>
      </ResponsiveContainer>)
      return(
        <>
         
         
      {PieChartWithPaddingAngles}
      
        
        
        </>
    )
}
export default GraphicPruebaT