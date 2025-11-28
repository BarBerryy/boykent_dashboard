import { ParsedAreaRange, ApartmentMixItem, AreaRangeItem } from '../types';

/**
 * Парсинг строки диапазона площадей
 * @param area - строка вида "38-42" или "-"
 * @returns объект с min, max и avg
 */
export function parseAreaRange(area: string): ParsedAreaRange {
  if (area === '-' || !area.includes('-')) {
    return { min: 0, max: 0, avg: 0 };
  }
  
  var parts = area.split('-');
  var min = parseInt(parts[0], 10) || 0;
  var max = parseInt(parts[1], 10) || 0;
  var avg = (min + max) / 2;
  
  return { min: min, max: max, avg: avg };
}

/**
 * Форматирование числа с разделителями тысяч
 * @param num - число для форматирования
 * @returns отформатированная строка
 */
export function formatNumber(num: number): string {
  return num.toLocaleString('ru-RU');
}

/**
 * Форматирование суммы в долларах
 * @param amount - сумма
 * @returns строка с символом доллара
 */
export function formatCurrency(amount: number): string {
  return '$' + formatNumber(amount);
}

/**
 * Форматирование суммы в миллионах
 * @param amount - сумма
 * @returns строка вида "$78.5M"
 */
export function formatMillions(amount: number): string {
  return '$' + (amount / 1000000).toFixed(1) + 'M';
}

/**
 * Получение CSS класса для бейджа процента
 * @param percent - процент
 * @returns CSS класс
 */
export function getPercentageColorClass(percent: number): string {
  if (percent >= 25) {
    return 'badge-green';
  }
  if (percent >= 15) {
    return 'badge-blue';
  }
  if (percent >= 10) {
    return 'badge-yellow';
  }
  return 'badge-gray';
}

/**
 * Получение inline CSS класса для бейджа (fallback)
 * @param percent - процент
 * @returns inline CSS класс
 */
export function getPercentageBgClass(percent: number): string {
  if (percent >= 25) {
    return 'bg-green-100 text-green-800';
  }
  if (percent >= 15) {
    return 'bg-blue-100 text-blue-800';
  }
  if (percent >= 10) {
    return 'bg-yellow-100 text-yellow-800';
  }
  return 'bg-gray-100 text-gray-800';
}

/**
 * Преобразование данных микса в диапазоны площадей
 * @param mix - массив элементов микса
 * @returns массив диапазонов площадей
 */
export function mixToAreaRanges(mix: ApartmentMixItem[]): AreaRangeItem[] {
  return mix
    .filter(function(item) {
      return item.area !== '-';
    })
    .map(function(item) {
      var parsed = parseAreaRange(item.area);
      return {
        type: item.type,
        min: parsed.min,
        max: parsed.max,
        avg: parsed.avg
      };
    });
}

/**
 * Фильтрация элементов с ненулевым количеством
 * @param mix - массив элементов микса
 * @returns отфильтрованный массив
 */
export function filterNonEmpty(mix: ApartmentMixItem[]): ApartmentMixItem[] {
  return mix.filter(function(item) {
    return item.count > 0;
  });
}

/**
 * Расчет средней цены квартиры
 * @param area - строка площади
 * @param pricePerSqm - цена за м²
 * @returns средняя цена
 */
export function calculateAvgPrice(area: string, pricePerSqm: number): number {
  var parsed = parseAreaRange(area);
  return Math.round(parsed.avg * pricePerSqm);
}

/**
 * Расчет общей выручки по типу
 * @param area - строка площади
 * @param pricePerSqm - цена за м²
 * @param count - количество квартир
 * @returns общая выручка
 */
export function calculateTotalRevenue(area: string, pricePerSqm: number, count: number): number {
  var avgPrice = calculateAvgPrice(area, pricePerSqm);
  return avgPrice * count;
}

/**
 * Проверка, является ли класс "оптимальным"
 * @param buildingClass - класс жилья
 * @returns true если это один из оптимальных классов
 */
export function isOptimalClass(buildingClass: string): boolean {
  return buildingClass === 'new_optimal' || 
         buildingClass === 'osii_optimal' || 
         buildingClass === 'market_trends';
}

/**
 * Конкатенация CSS классов
 * @param classes - массив классов или условных классов
 * @returns строка классов
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
