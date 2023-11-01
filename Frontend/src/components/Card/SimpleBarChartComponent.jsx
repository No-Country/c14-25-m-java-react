import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import SvgBar from '../../assets/icons/SvgBar';
function SimpleBarChartComponent({amount}){
    const data = [
        {
          name: 'Page A',
          uv: 0,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 0,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 0,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 0,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 0,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 0,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 0,
          pv: 4300,
          amt: 2100,
        },
      ];
      function prueba(){
        return(
          <svg width="20" height="465" viewBox="0 0 20 465" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 9.99999C0 4.47714 4.47715 0 10 0C15.5228 0 20 4.47715 20 10V4650H0V9.99999Z" fill="#933FFF"/>
        </svg>
        )

      }
      
    return(
        <ResponsiveContainer width="100%" height="85%">
        <BarChart
          
          data={amount}
         
          barSize={20}
        >
          <CartesianGrid strokeDasharray="0"  height={1}/>
          <XAxis dataKey="title"
           
           tickLine={false}
           tickMargin={10}
           />
          <YAxis
          tickLine={false}
         
          
          />

          <Tooltip />
          
          <Bar dataKey="amount" fill="#933fff" activeBar={<Rectangle fill="pink" stroke="blue" />}  />
          {/*<YAxis yAxisId="right" orientation="right" tickLine={false} tick={false} />
          <Bar yAxisId="right" dataKey="total" fill="#82ca9d" />*/}
         
        </BarChart>
      </ResponsiveContainer>
    )
}
export default SimpleBarChartComponent