import type { FinancialMetricsMap, ComparisonDataItem } from '../types';

export const financialMetrics: FinancialMetricsMap = {
  new_optimal: {
    pricePerSqm: 1750,
    avgUnitPrice: 121875,
    totalRevenue: 78000000,
    parkingSpaces: 512,
    parkingPrice: 18000,
    constructionCostPerSqm: 850,
    marginPercent: 42
  },
  osii_optimal: {
    pricePerSqm: 1700,
    avgUnitPrice: 83712,
    totalRevenue: 55250000,
    parkingSpaces: 528,
    parkingPrice: 18000,
    constructionCostPerSqm: 850,
    marginPercent: 40
  },
  market_trends: {
    pricePerSqm: 1680,
    avgUnitPrice: 94080,
    totalRevenue: 62092800,
    parkingSpaces: 528,
    parkingPrice: 18000,
    constructionCostPerSqm: 820,
    marginPercent: 39
  },
  comfort_plus: {
    pricePerSqm: 1800,
    avgUnitPrice: 91404,
    totalRevenue: 58498560,
    parkingSpaces: 480,
    parkingPrice: 15000,
    constructionCostPerSqm: 800,
    marginPercent: 38
  },
  comfort: {
    pricePerSqm: 1600,
    avgUnitPrice: 81248,
    totalRevenue: 51998720,
    parkingSpaces: 450,
    parkingPrice: 12000,
    constructionCostPerSqm: 750,
    marginPercent: 35
  },
  business: {
    pricePerSqm: 2200,
    avgUnitPrice: 111716,
    totalRevenue: 71498240,
    parkingSpaces: 576,
    parkingPrice: 20000,
    constructionCostPerSqm: 950,
    marginPercent: 40
  }
};

export const comparisonData: ComparisonDataItem[] = [
  { name: 'Комфорт', revenue: 52, margin: 35, avgPrice: 81, liquidity: 85 },
  { name: 'Бойкент (ОСИиИ)', revenue: 78, margin: 42, avgPrice: 122, liquidity: 88 },
  { name: 'Бойкент (Тренды)', revenue: 62.1, margin: 39, avgPrice: 94, liquidity: 92 },
  { name: 'Бойкент (Динамика)', revenue: 55.3, margin: 40, avgPrice: 84, liquidity: 93 },
  { name: 'Комфорт+', revenue: 58.5, margin: 38, avgPrice: 91, liquidity: 80 },
  { name: 'Бизнес', revenue: 71.5, margin: 40, avgPrice: 112, liquidity: 70 }
];
