import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import React, { useState, useEffect } from 'react';
const data = [
    {
        name: '',
        uv: 0,
        pv: 0,
        amt: 0,
    },
    {
        name: 'Enero',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Febrero',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Marzo',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Abril',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Mayo',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Junio',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Julio',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Agosto',
        uv: 4200,
        pv: 5000,
        amt: 2200,
    },
    {
        name: 'Septiembre',
        uv: 3100,
        pv: 3200,
        amt: 2500,
    },
    {
        name: 'Octubre',
        uv: 2800,
        pv: 2700,
        amt: 2100,
    },
    {
        name: 'Noviembre',
        uv: 3700,
        pv: 4500,
        amt: 2600,
    },
    {
        name: 'Diciembre',
        uv: 4000,
        pv: 5000,
        amt: 2400,
        
    },
];



const GraphicPruebaA = () => {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
      )
    
      useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);
      
      const noDic= data.slice(1,8
      
     )
     console.log(noDic)




    return (
        <>
         <div className='GraphicPruebaA-h1' >
            <h2>Al reducir el tamaño a menos de 768 el grafico deja de ser anual a se hasta julio.</h2>
      {matches && (<h1>Big Screen Mayor a 768px</h1>)}
      {!matches && (<h1>Small Screen  menor a 768px</h1>)}
     </div >
        <ResponsiveContainer width={"90%"} height={500}  className="GraphicPruebaA">

            <AreaChart data={!matches ? noDic:data}>
                <Area type="monotone" 
                activeDot dataKey="pv" 
                stroke="#8884d8" 
                fillOpacity={1} fill="url(#colorUv)" />
                <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
                <Tooltip />
                <XAxis dataKey={"name"} />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
            </AreaChart>


        </ResponsiveContainer>
        </>
    )
}

export default GraphicPruebaA