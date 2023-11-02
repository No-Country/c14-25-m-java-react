import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import SvgBar from '../../assets/icons/SvgBar';
function SimpleBarChartComponent({amount}){         
    return(
      
        <ResponsiveContainer width={"99%"} height={525}>
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