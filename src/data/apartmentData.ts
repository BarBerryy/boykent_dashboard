import type { ApartmentDataMap } from '../types';

export const apartmentData: ApartmentDataMap = {
  new_optimal: {
    mix: [
      { type: 'Студия', percent: 5, area: '38-42', count: 32, color: '#8884d8' },
      { type: '1-комн', percent: 22, area: '45-52', count: 141, color: '#82ca9d' },
      { type: '1+ комн', percent: 10, area: '50-56', count: 64, color: '#7dd3c0' },
      { type: '2-комн', percent: 30, area: '60-70', count: 192, color: '#ffc658' },
      { type: '2+ комн', percent: 13, area: '72-88', count: 83, color: '#ffb347' },
      { type: '3-комн', percent: 14, area: '80-92', count: 90, color: '#ff8042' },
      { type: '3+ комн', percent: 4, area: '95-110', count: 26, color: '#ff6b6b' },
      { type: '4-комн', percent: 2, area: '115-135', count: 12, color: '#a4de6c' },
      { type: '5-комн', percent: 0, area: '-', count: 0, color: '#c9a0dc' }
    ],
    totalUnits: 640,
    avgArea: 62.5,
    totalArea: 32500,
    description: 'Оптимизированный микс для максимальной ликвидности и рентабельности'
  },
  osii_optimal: {
    mix: [
      { type: 'Студия', percent: 10, area: '25-31', count: 66, color: '#8884d8' },
      { type: '1-комн', percent: 20, area: '34-42', count: 132, color: '#82ca9d' },
      { type: '1+ комн', percent: 15, area: '38-47', count: 99, color: '#7dd3c0' },
      { type: '2-комн', percent: 28, area: '47-58', count: 185, color: '#ffc658' },
      { type: '2+ комн', percent: 12, area: '53-63', count: 79, color: '#ffb347' },
      { type: '3-комн', percent: 12, area: '63-75', count: 79, color: '#ff8042' },
      { type: '3+ комн', percent: 2, area: '73-86', count: 13, color: '#ff6b6b' },
      { type: '4-комн', percent: 1, area: '86-100', count: 7, color: '#a4de6c' },
      { type: '5-комн', percent: 0, area: '-', count: 0, color: '#c9a0dc' }
    ],
    totalUnits: 660,
    avgArea: 49.2,
    totalArea: 32500,
    description: 'Оптимизация под тренды 2025: шринкфляция, евроформаты, акцент на компактное ликвидное жильё'
  },
  market_trends: {
    mix: [
      { type: 'Студия', percent: 8, area: '35-40', count: 53, color: '#8884d8' },
      { type: '1-комн', percent: 26, area: '42-48', count: 172, color: '#82ca9d' },
      { type: '1+ комн', percent: 12, area: '48-54', count: 79, color: '#7dd3c0' },
      { type: '2-комн', percent: 32, area: '58-68', count: 211, color: '#ffc658' },
      { type: '2+ комн', percent: 11, area: '70-85', count: 73, color: '#ffb347' },
      { type: '3-комн', percent: 9, area: '75-88', count: 59, color: '#ff8042' },
      { type: '3+ комн', percent: 2, area: '90-105', count: 13, color: '#ff6b6b' },
      { type: '4-комн', percent: 0, area: '-', count: 0, color: '#a4de6c' },
      { type: '5-комн', percent: 0, area: '-', count: 0, color: '#c9a0dc' }
    ],
    totalUnits: 660,
    avgArea: 56,
    totalArea: 32500,
    description: 'Оптимизированная структура на основе трендов рынка и демографических изменений'
  },
  comfort_plus: {
    mix: [
      { type: 'Студия', percent: 6, area: '38-42', count: 38, color: '#8884d8' },
      { type: '1-комн', percent: 20, area: '44-50', count: 128, color: '#82ca9d' },
      { type: '1+ комн', percent: 8, area: '48-54', count: 51, color: '#7dd3c0' },
      { type: '2-комн', percent: 28, area: '58-68', count: 179, color: '#ffc658' },
      { type: '2+ комн', percent: 12, area: '70-85', count: 77, color: '#ffb347' },
      { type: '3-комн', percent: 15, area: '78-88', count: 96, color: '#ff8042' },
      { type: '3+ комн', percent: 7, area: '90-105', count: 45, color: '#ff6b6b' },
      { type: '4-комн', percent: 3, area: '110-125', count: 19, color: '#a4de6c' },
      { type: '5-комн', percent: 1, area: '130-150', count: 7, color: '#c9a0dc' }
    ],
    totalUnits: 640,
    avgArea: 50.78,
    totalArea: 32500,
    description: 'Сбалансированный микс для семейных покупателей среднего класса'
  },
  comfort: {
    mix: [
      { type: 'Студия', percent: 10, area: '36-40', count: 64, color: '#8884d8' },
      { type: '1-комн', percent: 28, area: '42-48', count: 179, color: '#82ca9d' },
      { type: '1+ комн', percent: 7, area: '46-52', count: 45, color: '#7dd3c0' },
      { type: '2-комн', percent: 32, area: '55-65', count: 205, color: '#ffc658' },
      { type: '2+ комн', percent: 10, area: '68-80', count: 64, color: '#ffb347' },
      { type: '3-комн', percent: 11, area: '75-85', count: 70, color: '#ff8042' },
      { type: '3+ комн', percent: 2, area: '88-100', count: 13, color: '#ff6b6b' },
      { type: '4-комн', percent: 0, area: '-', count: 0, color: '#a4de6c' },
      { type: '5-комн', percent: 0, area: '-', count: 0, color: '#c9a0dc' }
    ],
    totalUnits: 640,
    avgArea: 50.78,
    totalArea: 32500,
    description: 'Массовый сегмент с акцентом на доступность'
  },
  business: {
    mix: [
      { type: 'Студия', percent: 2, area: '40-45', count: 13, color: '#8884d8' },
      { type: '1-комн', percent: 12, area: '48-55', count: 77, color: '#82ca9d' },
      { type: '1+ комн', percent: 6, area: '52-60', count: 38, color: '#7dd3c0' },
      { type: '2-комн', percent: 25, area: '62-75', count: 160, color: '#ffc658' },
      { type: '2+ комн', percent: 14, area: '78-92', count: 90, color: '#ffb347' },
      { type: '3-комн', percent: 22, area: '82-95', count: 141, color: '#ff8042' },
      { type: '3+ комн', percent: 10, area: '98-115', count: 64, color: '#ff6b6b' },
      { type: '4-комн', percent: 7, area: '115-140', count: 45, color: '#a4de6c' },
      { type: '5-комн', percent: 2, area: '145-165', count: 12, color: '#c9a0dc' }
    ],
    totalUnits: 640,
    avgArea: 50.78,
    totalArea: 32500,
    description: 'Премиальный сегмент для состоятельных покупателей'
  }
};
