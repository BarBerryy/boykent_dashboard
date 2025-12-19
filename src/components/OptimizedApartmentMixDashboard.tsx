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
  // 🔐 Все useState должны быть ВНАЧАЛЕ (до любых условий)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('boykent_auth') === 'true'; // ✅ sessionStorage
  });
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [buildingClass, setBuildingClass] = useState<BuildingClass>('new_optimal');
  const [showDetailModal, setShowDetailModal] = useState(false);

  const CORRECT_PASSWORD = '123123';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('boykent_auth', 'true'); // ✅ sessionStorage
      setError('');
    } else {
      setError('Неверный пароль');
      setPasswordInput('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('boykent_auth'); // ✅ sessionStorage
  };

  // Вычисляемые значения ПОСЛЕ всех useState
  const currentData = apartmentData[buildingClass];
  const currentMetrics = financialMetrics[buildingClass];
  const areaRanges = mixToAreaRanges(currentData.mix);
  const showComparisonChart = isOptimalClass(buildingClass);

  // Форма входа
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
        <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🏢</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              ЖК "Бойкент"
            </h1>
            <p className="text-gray-600">Введите пароль для доступа к квартирографии</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Пароль
              </label>
              <input
                type="password"
                id="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                placeholder="Введите пароль"
                autoFocus
              />
              {error && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <span className="mr-1">❌</span>
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-emerald-700 hover:to-green-700 transition-all shadow-lg"
            >
              Войти
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>🔒 Защищенный доступ</p>
            <p className="text-xs mt-2">Пароль действителен до закрытия вкладки</p>
          </div>
        </div>
      </div>
    );
  }

  // Основной контент (если авторизован)
  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
      {/* 🔐 Кнопка выхода */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all text-sm font-semibold shadow-lg flex items-center gap-2"
        >
          <span>🚪</span>
          Выйти
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-2xl p-8">
        {/* Остальной ваш код без изменений */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Планируемая квартирография ЖК "Бойкент" 💚
          </h1>
          <p className="text-lg text-gray-600">
            На основе анализа 3 существующих сегментов рынка
          </p>
        </div>

        <ClassSelector currentClass={buildingClass} onClassChange={setBuildingClass} />

        <p className="text-center text-gray-600 mb-8 text-lg italic">
          {currentData.description}
        </p>

        <MetricsCards
          totalUnits={currentData.totalUnits}
          totalArea={currentData.totalArea}
          pricePerSqm={currentMetrics.pricePerSqm}
          marginPercent={currentMetrics.marginPercent}
        />

        <ComparisonChart data={comparisonData} visible={showComparisonChart} />

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <PieChartSection data={currentData.mix} />
          <BarChartSection data={areaRanges} />
        </div>

        <DetailedTable
          mix={currentData.mix}
          totalUnits={currentData.totalUnits}
          avgUnitPrice={currentMetrics.avgUnitPrice}
          totalRevenue={currentMetrics.totalRevenue}
          pricePerSqm={currentMetrics.pricePerSqm}
        />

        <FinancialMetricsSection metrics={currentMetrics} totalArea={currentData.totalArea} />

        <BuildingClassInfo buildingClass={buildingClass} />

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

        <Recommendations />

        <ComparisonTable />
      </div>

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