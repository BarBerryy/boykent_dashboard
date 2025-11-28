import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { BarChartSectionProps } from '../types';

const BarChartSection = ({ data }: BarChartSectionProps) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
        Диапазоны площадей (м²)
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="type" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="min" fill="#82ca9d" name="Минимум" />
          <Bar dataKey="max" fill="#8884d8" name="Максимум" />
          <Bar dataKey="avg" fill="#ffc658" name="Среднее" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartSection;
