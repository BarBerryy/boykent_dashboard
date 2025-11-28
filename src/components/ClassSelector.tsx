import type { BuildingClass, ClassSelectorProps, ClassButtonConfig } from '../types';

const classButtons: ClassButtonConfig[] = [
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
  },
  {
    key: 'comfort',
    label: 'Комфорт',
    activeClass: 'bg-blue-600 text-white shadow-lg scale-105'
  },
  {
    key: 'comfort_plus',
    label: 'Комфорт+',
    activeClass: 'bg-blue-600 text-white shadow-lg scale-105'
  },
  {
    key: 'business',
    label: 'Бизнес',
    activeClass: 'bg-blue-600 text-white shadow-lg scale-105'
  }
];

const ClassSelector = ({ currentClass, onClassChange }: ClassSelectorProps) => {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-4">
      {classButtons.map((config) => {
        const isActive = currentClass === config.key;
        const buttonClass = isActive
          ? `px-6 py-3 rounded-lg font-semibold transition-all ${config.activeClass}`
          : 'px-6 py-3 rounded-lg font-semibold transition-all bg-gray-200 text-gray-700 hover:bg-gray-300';

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
  );
};

export default ClassSelector;
