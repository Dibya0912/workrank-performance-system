import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", score: 40 },
  { day: "Tue", score: 60 },
  { day: "Wed", score: 55 },
  { day: "Thu", score: 70 },
  { day: "Fri", score: 90 },
];

export default function Charts() {
  return (
    <div className="p-6 mt-6 bg-surface rounded-xl shadow-card">
      <h3 className="mb-4 font-semibold">
        Weekly Performance
      </h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
