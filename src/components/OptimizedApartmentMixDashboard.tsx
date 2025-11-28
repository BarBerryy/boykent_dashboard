import { useState } from 'react';
import type { BuildingClass } from '../types';
import { apartmentData, detailedLayouts, financialMetrics, comparisonData } from '../data';
import { mixToAreaRanges, isOptimalClass } from '../utils';
import ClassSelector from './ClassSelector';
import MetricsCards from './MetricsCards';
import ComparisonChart from './ComparisonChart';
import PieChartSection from './PieChartSection';
import BarChartSection from './BarChartSection';
import DetailedTable from './DetailedTable';
import FinancialMetricsSection from './FinancialMetricsSection';
import BuildingClassInfo from './BuildingClassInfo';
import Recommendations from './Recommendations';
import ComparisonTable from './ComparisonTable';
import DetailModal from './DetailModal';

const OptimizedApartmentMixDashboard = () => {
  const [buildingClass, setBuildingClass] = useState<BuildingClass>('new_optimal');
  const [showDetailModal, setShowDetailModal] = useState(false);

  const currentData = apartmentData[buildingClass];
  const currentMetrics = financialMetrics[buildingClass];
  const areaRanges = mixToAreaRanges(currentData.mix);
  const showComparisonChart = isOptimalClass(buildingClass);

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
      <div className="bg-white rounded-xl shadow-2xl p-8">
        {/* Заголовок */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Планируемая квартирография ЖК "Бойкент" 💚
          </h1>
          <p className="text-lg text-gray-600">
            На основе анализа 3 существующих сегментов рынка
          </p>
        </div>

        {/* Выбор класса жилья */}
        <ClassSelector currentClass={buildingClass} onClassChange={setBuildingClass} />

        {/* Описание */}
        <p className="text-center text-gray-600 mb-8 text-lg italic">
          {currentData.description}
        </p>

        {/* Ключевые метрики */}
        <MetricsCards
          totalUnits={currentData.totalUnits}
          totalArea={currentData.totalArea}
          pricePerSqm={currentMetrics.pricePerSqm}
          marginPercent={currentMetrics.marginPercent}
        />

        {/* Сравнительный анализ */}
        <ComparisonChart data={comparisonData} visible={showComparisonChart} />

        {/* Графики */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <PieChartSection data={currentData.mix} />
          <BarChartSection data={areaRanges} />
        </div>

        {/* Детальная таблица */}
        <DetailedTable
          mix={currentData.mix}
          totalUnits={currentData.totalUnits}
          avgUnitPrice={currentMetrics.avgUnitPrice}
          totalRevenue={currentMetrics.totalRevenue}
          pricePerSqm={currentMetrics.pricePerSqm}
        />

        {/* Финансовые показатели */}
        <FinancialMetricsSection metrics={currentMetrics} totalArea={currentData.totalArea} />

        {/* Информация о классе */}
        <BuildingClassInfo buildingClass={buildingClass} />

        {/* Детальная планировка */}
        <div className="mt-8 bg-white border-2 border-indigo-200 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            📐 Детальная планировка квартир
          </h3>
          <button
            onClick={() => setShowDetailModal(true)}
            className="w-full mb-4 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg"
          >
            📋 Посмотреть полную детализацию каждой квартиры
          </button>
          <p className="text-gray-600 text-center italic">
            Подробное описание всех помещений для каждого типа квартир
          </p>
        </div>

        {/* Рекомендации */}
        <Recommendations />

        {/* Сравнительная таблица */}
        <ComparisonTable />
      </div>

      {/* Модальное окно */}
      <DetailModal
        showDetailModal={showDetailModal}
        setShowDetailModal={setShowDetailModal}
        buildingClass={buildingClass}
        detailedLayouts={detailedLayouts}
      />
    </div>
  );
};

export default OptimizedApartmentMixDashboard;
