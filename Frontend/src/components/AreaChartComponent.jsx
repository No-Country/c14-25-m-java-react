import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useNewSavingsGoals } from "../services/useNewSavingsGoals";

const CustomTooltip = ({ active, payload, label, savingsGoals }) => {
    if (active && payload && payload.length) {
        const selectedMonth = savingsGoals.find((month) => month.title === label);
        const selectedSavingsGoals = selectedMonth ? selectedMonth.savingsGoals : [];

        return (
            <div className="areChartComponent-custom-tooltip">

                <p className="title">{`${label}`}</p>

                {selectedSavingsGoals.map((goal) => (
                    <p className="subtitle" key={goal.id}>
                        {goal.title}: ${goal.price}
                    </p>
                ))}

                <p className="title">Total: ${selectedMonth.totalPrice}</p>

            </div>
        );
    }

    return null;
};

const AreaChartComponent = () => {
    const { dbAreaChart } = useNewSavingsGoals()

    return (
        <ResponsiveContainer width={"90%"} height={500}>
            <AreaChart data={dbAreaChart} >
                <CartesianGrid strokeDasharray="0" vertical={false} />

                <Area
                    type="monotone"
                    dataKey="totalPrice"
                    stroke="#933FFF"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorUv)"
                    isAnimationActive={false}
                    dot={{ r: 4, fill: "#933FFF" }}
                    activeDot={{ r: 7, fill: "#933FFF" }}

                />

                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#933FFF" stopOpacity={0.6} />
                        <stop offset="95%" stopColor="#933FFF" stopOpacity={0} />
                    </linearGradient>
                </defs>


                <XAxis
                    dataKey="title"
                    angle={0}
                    textAnchor="middle"
                    tickLine={false}
                    tickMargin={10}
                    tick={{ fill: "#666666" }}
                />

                <YAxis
                    allowDecimals={false}
                    tickCount={5}
                    tickLine={false}
                    tickMargin={10}
                    tick={{ fill: "#666666" }}
                />

                <Tooltip content={(props) => <CustomTooltip savingsGoals={dbAreaChart} {...props} />} />

            </AreaChart>
        </ResponsiveContainer>
    );
};

export default AreaChartComponent;