import type { ParsedAreaRange, ApartmentMixItem, AreaRangeItem } from '../types';

export const parseAreaRange = (area: string): ParsedAreaRange => {
  if (area === '-' || !area.includes('-')) {
    return { min: 0, max: 0, avg: 0 };
  }
  const parts = area.split('-');
  const min = parseInt(parts[0], 10) || 0;
  const max = parseInt(parts[1], 10) || 0;
  const avg = (min + max) / 2;
  return { min, max, avg };
};

export const formatNumber = (num: number): string => {
  return num.toLocaleString('ru-RU');
};

export const formatCurrency = (amount: number): string => {
  return '$' + formatNumber(amount);
};

export const formatMillions = (amount: number): string => {
  return '$' + (amount / 1000000).toFixed(1) + 'M';
};

export const getPercentageBgClass = (percent: number): string => {
  if (percent >= 25) return 'bg-green-100 text-green-800';
  if (percent >= 15) return 'bg-blue-100 text-blue-800';
  if (percent >= 10) return 'bg-yellow-100 text-yellow-800';
  return 'bg-gray-100 text-gray-800';
};

export const mixToAreaRanges = (mix: ApartmentMixItem[]): AreaRangeItem[] => {
  return mix
    .filter((item) => item.area !== '-')
    .map((item) => {
      const parsed = parseAreaRange(item.area);
      return {
        type: item.type,
        min: parsed.min,
        max: parsed.max,
        avg: parsed.avg
      };
    });
};

export const filterNonEmpty = (mix: ApartmentMixItem[]): ApartmentMixItem[] => {
  return mix.filter((item) => item.count > 0);
};

export const calculateAvgPrice = (area: string, pricePerSqm: number): number => {
  const parsed = parseAreaRange(area);
  return Math.round(parsed.avg * pricePerSqm);
};

export const calculateTotalRevenue = (area: string, pricePerSqm: number, count: number): number => {
  const avgPrice = calculateAvgPrice(area, pricePerSqm);
  return avgPrice * count;
};

export const isOptimalClass = (buildingClass: string): boolean => {
  return buildingClass === 'new_optimal' || 
         buildingClass === 'osii_optimal' || 
         buildingClass === 'market_trends';
};
