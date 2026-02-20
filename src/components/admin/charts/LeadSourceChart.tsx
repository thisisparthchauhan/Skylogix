import {
    PieChart, Pie, Cell, Tooltip,
    Legend, ResponsiveContainer
} from "recharts"

const data = [
    { name: "Contact Form", value: 420, color: "#4F8EF7" },
    { name: "Book a Call", value: 310, color: "#00C2FF" },
    { name: "Estimator", value: 285, color: "#7B5EA7" },
    { name: "Direct", value: 215, color: "#F59E0B" },
    { name: "Referral", value: 120, color: "#22C55E" },
]

const RADIAN = Math.PI / 180
const renderLabel = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props
    const r = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + r * Math.cos(-midAngle * RADIAN)
    const y = cy + r * Math.sin(-midAngle * RADIAN)
    return percent > 0.08 ? (
        <text x={x} y={y} fill="white"
            textAnchor="middle" dominantBaseline="central"
            fontSize={11} fontWeight={600}>
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    ) : null
}

export default function LeadSourceChart() {
    const total = data.reduce((s, d) => s + d.value, 0)
    return (
        <div className="w-full h-[280px] relative">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="45%"
                        innerRadius={70}
                        outerRadius={100}
                        paddingAngle={3}
                        dataKey="value"
                        labelLine={false}
                        label={renderLabel}>
                        {data.map((entry, i) => (
                            <Cell key={i} fill={entry.color} stroke="transparent" />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{
                            background: "rgba(10,15,44,0.95)",
                            border: "1px solid rgba(79,142,247,0.2)",
                            borderRadius: "8px",
                            color: "white",
                            fontSize: "12px"
                        }} />
                    <Legend
                        iconType="circle"
                        iconSize={8}
                        wrapperStyle={{
                            fontSize: "11px",
                            color: "#8A9BB5",
                            paddingTop: "8px"
                        }} />
                </PieChart>
            </ResponsiveContainer>

            {/* Center total label */}
            <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                <p className="text-white text-xl font-bold">
                    {total.toLocaleString()}
                </p>
                <p className="text-white/40 text-[10px]">
                    Total Leads
                </p>
            </div>
        </div>
    )
}
