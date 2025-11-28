import { useState } from 'react';
import type { BuildingClass, ClassSelectorProps, ClassButtonConfig } from '../types';

const mainButtons: ClassButtonConfig[] = [
  {
    key: 'new_optimal',
    label: 'Бойкент (ОСИиИ)',
    activeClass: 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg scale-105 ring-4 ring-emerald-200'
  },
  {
    key: 'market_trends',
    label: 'Бойкент (Тренды)',
    activeClass: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105 ring-4 ring-purple-200'
  },
  {
    key: 'osii_optimal',
    label: 'Бойкент (Динамика)',
    activeClass: 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg scale-105 ring-4 ring-teal-200'
  }
];

const competitorButtons: ClassButtonConfig[] = [
  {
    key: 'comfort',
    label: 'Комфорт',
    activeClass: 'bg-blue-600 text-white shadow-lg'
  },
  {
    key: 'comfort_plus',
    label: 'Комфорт+',
    activeClass: 'bg-blue-600 text-white shadow-lg'
  },
  {
    key: 'business',
    label: 'Бизнес',
    activeClass: 'bg-blue-600 text-white shadow-lg'
  }
];

const competitorKeys = ['comfort', 'comfort_plus', 'business'];

const ClassSelector = ({ currentClass, onClassChange }: ClassSelectorProps) => {
  const [showCompetitors, setShowCompetitors] = useState(false);
  const isCompetitorActive = competitorKeys.includes(currentClass);

  const handleCompetitorClick = () => {
    setShowCompetitors(!showCompetitors);
    if (!isCompetitorActive) {
      onClassChange('comfort');
    }
  };

  return (
    <div className="mb-8">
      {/* Основные вкладки */}
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {mainButtons.map((config) => {
          const isActive = currentClass === config.key;
          const buttonClass = isActive
            ? `px-6 py-3 rounded-lg font-semibold transition-all ${config.activeClass}`
            : 'px-6 py-3 rounded-lg font-semibold transition-all bg-gray-200 text-gray-700 hover:bg-gray-300';

          return (
            <button
              key={config.key}
              onClick={() => {
                onClassChange(config.key);
                setShowCompetitors(false);
              }}
              className={buttonClass}
            >
              {config.label}
            </button>
          );
        })}

        {/* Кнопка "Конкуренты" */}
        <button
          onClick={handleCompetitorClick}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            isCompetitorActive
              ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg scale-105 ring-4 ring-gray-300'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Конкуренты {showCompetitors || isCompetitorActive ? '▲' : '▼'}
        </button>
      </div>

      {/* Подвкладки конкурентов */}
      {(showCompetitors || isCompetitorActive) && (
        <div className="flex flex-wrap justify-center gap-3 p-4 bg-gray-100 rounded-lg border-2 border-gray-200">
          <span className="text-gray-500 font-medium self-center mr-2">Выберите:</span>
          {competitorButtons.map((config) => {
            const isActive = currentClass === config.key;
            const buttonClass = isActive
              ? `px-5 py-2 rounded-lg font-semibold transition-all ${config.activeClass}`
              : 'px-5 py-2 rounded-lg font-semibold transition-all bg-white text-gray-600 hover:bg-gray-50 border border-gray-300';

            return (
              <button
                key={config.key}
                onClick={() => onClassChange(config.key)}
                className={buttonClass}
              >
                {config.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ClassSelector;
