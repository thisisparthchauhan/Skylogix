import {
    LineChart, Line, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer
} from "recharts"

const data = [
    { month: "Mar", revenue: 18000, expenses: 9000 },
    { month: "Apr", revenue: 21000, expenses: 9500 },
    { month: "May", revenue: 19500, expenses: 9200 },
    { month: "Jun", revenue: 24000, expenses: 10000 },
    { month: "Jul", revenue: 22000, expenses: 9800 },
    { month: "Aug", revenue: 26000, expenses: 10500 },
    { month: "Sep", revenue: 23000, expenses: 10200 },
    { month: "Oct", revenue: 28000, expenses: 11000 },
    { month: "Nov", revenue: 25000, expenses: 10800 },
    { month: "Dec", revenue: 30000, expenses: 11500 },
    { month: "Jan", revenue: 27000, expenses: 11200 },
    { month: "Feb", revenue: 24800, expenses: 10200 },
]

export default function RevenueChart() {
    return (
        <div className="w-full h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>

                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="rgba(255,255,255,0.05)" />

                    <XAxis
                        dataKey="month"
                        tick={{ fill: "#8A9BB5", fontSize: 11 }}
                        axisLine={{ stroke: "rgba(255,255,255,0.08)" }}
                        tickLine={false} />

                    <YAxis
                        tick={{ fill: "#8A9BB5", fontSize: 11 }}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />

                    <Tooltip
                        contentStyle={{
                            background: "rgba(10,15,44,0.95)",
                            border: "1px solid rgba(79,142,247,0.2)",
                            borderRadius: "8px",
                            color: "white",
                            fontSize: "12px"
                        }}
                        formatter={(value: any) =>
                            [`$${Number(value).toLocaleString()}`, ""]} />

                    <Legend
                        wrapperStyle={{
                            fontSize: "12px",
                            color: "#8A9BB5",
                            paddingTop: "12px"
                        }} />

                    <Line
                        type="monotone"
                        dataKey="revenue"
                        name="Revenue"
                        stroke="#4F8EF7"
                        strokeWidth={2.5}
                        dot={{ fill: "#4F8EF7", r: 3 }}
                        activeDot={{ r: 5 }} />

                    <Line
                        type="monotone"
                        dataKey="expenses"
                        name="Expenses"
                        stroke="#EF4444"
                        strokeWidth={2.5}
                        dot={{ fill: "#EF4444", r: 3 }}
                        activeDot={{ r: 5 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
