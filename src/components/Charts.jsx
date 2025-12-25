import { useEffect, useState } from "react";
import { api } from "../services/api";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Charts() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.getChartData().then(setData);
  }, []);

  if (!data) {
    return (
      <div className="flex items-center justify-center h-64 bg-white rounded shadow">
        <p className="text-gray-500">Loading chart...</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded shadow">
      <h3 className="mb-4 text-lg font-semibold text-gray-800">
        Weekly Performance
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
