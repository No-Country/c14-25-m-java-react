import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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

const AreaChartComponent = () => {
    return (
        <ResponsiveContainer width={"90%"} height={500}>

            <AreaChart data={data}>
                <Area type="monotone" activeDot dataKey="pv" stroke="#8884d8" fill="#C5A7FF" />
                <Tooltip />
                <XAxis dataKey={"name"} />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
            </AreaChart>


        </ResponsiveContainer>
    )
}

export default AreaChartComponent