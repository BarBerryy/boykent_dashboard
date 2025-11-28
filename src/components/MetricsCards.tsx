import type { MetricsCardsProps } from '../types';
import { formatNumber } from '../utils';

const MetricsCards = ({ totalUnits, totalArea, pricePerSqm, marginPercent }: MetricsCardsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-4 text-white">
        <div className="text-sm opacity-90">Всего квартир</div>
        <div className="text-3xl font-bold">{totalUnits}</div>
      </div>
      
      <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-4 text-white">
        <div className="text-sm opacity-90">Общая площадь</div>
        <div className="text-3xl font-bold">{formatNumber(totalArea)} м²</div>
      </div>
      
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-4 text-white">
        <div className="text-sm opacity-90">Цена за м²</div>
        <div className="text-3xl font-bold">${pricePerSqm}</div>
      </div>
      
      <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg p-4 text-white">
        <div className="text-sm opacity-90">Маржа</div>
        <div className="text-3xl font-bold">{marginPercent}%</div>
      </div>
    </div>
  );
};

export default MetricsCards;
