import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { ComparisonChartProps } from '../types';

const ComparisonChart = ({ data, visible }: ComparisonChartProps) => {
  if (!visible) return null;

  return (
    <div className="mb-8 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-6 border-2 border-emerald-200">
      <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        📊 Сравнительный анализ всех проектов
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} name="Выручка (млн $)" />
          <Line type="monotone" dataKey="margin" stroke="#3b82f6" strokeWidth={3} name="Маржа (%)" />
          <Line type="monotone" dataKey="liquidity" stroke="#f59e0b" strokeWidth={3} name="Ликвидность (%)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComparisonChart;
