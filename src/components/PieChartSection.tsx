import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import type { PieChartSectionProps } from '../types';
import { filterNonEmpty } from '../utils';

const PieChartSection = ({ data }: PieChartSectionProps) => {
  const filteredData = filterNonEmpty(data);

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
        Структура квартирографии (%)
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={filteredData}
            dataKey="percent"
            nameKey="type"
            cx="50%"
            cy="50%"
            outerRadius={100}
            startAngle={90}
            endAngle={-270}
            label={({ type, percent }) => `${type}: ${percent}%`}
          >
            {filteredData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartSection;
