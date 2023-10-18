import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


function Graphic(){
    const data = [
    {name: 'Page A', uv: 600, pv: 2600, amt: 2600},
    {name: 'Page b', uv: 500, pv: 2500, amt: 2500},
    {name: 'Page d', uv: 400, pv: 2400, amt: 2400},
    {name: 'Page e', uv: 300, pv: 2300, amt: 2300},
    {name: 'Page f', uv: 200, pv: 2200, amt: 2200},
    {name: 'Page g', uv: 100, pv: 2100, amt: 2100},
];

const renderLineChart = (
    <LineChart width={600}height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
     <CartesianGrid stroke="#ccc" />
     
  </LineChart>
);
return(
    <>
    
        <ul className="Graphic-ul">
            <li><h3>Julio</h3></li>
            <li>Gasto: 390.103</li>
        </ul>
    <div className="Graphic">{renderLineChart}</div>
   
    
    
    </>
)
}
export default Graphic