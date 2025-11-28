import type { FinancialMetricsSectionProps } from '../types';

const FinancialMetricsSection = ({ metrics, totalArea }: FinancialMetricsSectionProps) => {
  const revenueInMillions = (metrics.totalRevenue / 1000000).toFixed(1);
  const parkingRevenue = metrics.parkingSpaces * metrics.parkingPrice;
  const parkingRevenueInMillions = (parkingRevenue / 1000000).toFixed(1);
  const totalRevenueWithParking = metrics.totalRevenue + parkingRevenue;
  const totalRevenueInMillions = (totalRevenueWithParking / 1000000).toFixed(1);
  const constructionCost = totalArea * metrics.constructionCostPerSqm;
  const constructionCostInMillions = (constructionCost / 1000000).toFixed(1);
  const profit = totalRevenueWithParking - constructionCost;
  const profitInMillions = (profit / 1000000).toFixed(1);

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        💰 Финансовые показатели проекта
      </h3>
      
      <div className="grid md:grid-cols-4 gap-6 mb-4">
        <div className="bg-white rounded-lg p-4 shadow">
          <div className="text-sm text-gray-600 mb-1">Выручка (квартиры)</div>
          <div className="text-2xl font-bold text-indigo-600">${revenueInMillions}M</div>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow">
          <div className="text-sm text-gray-600 mb-1">Паркинг ({metrics.parkingSpaces} мест)</div>
          <div className="text-2xl font-bold text-green-600">${parkingRevenueInMillions}M</div>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow">
          <div className="text-sm text-gray-600 mb-1">Общая выручка</div>
          <div className="text-2xl font-bold text-purple-600">${totalRevenueInMillions}M</div>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow">
          <div className="text-sm text-gray-600 mb-1">Маржинальность</div>
          <div className="text-2xl font-bold text-orange-600">{metrics.marginPercent}%</div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-4 shadow">
          <div className="text-sm text-gray-600 mb-1">Себестоимость строительства</div>
          <div className="text-xl font-bold text-gray-700">
            ${metrics.constructionCostPerSqm}/м² = ${constructionCostInMillions}M
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow">
          <div className="text-sm text-gray-600 mb-1">Прогнозируемая прибыль</div>
          <div className="text-xl font-bold text-green-700">${profitInMillions}M</div>
        </div>
      </div>
    </div>
  );
};

export default FinancialMetricsSection;
