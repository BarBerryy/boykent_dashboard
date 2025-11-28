// ==================== ОСНОВНЫЕ ТИПЫ ====================

export type BuildingClass = 
  | 'new_optimal' 
  | 'osii_optimal' 
  | 'market_trends' 
  | 'comfort_plus' 
  | 'comfort' 
  | 'business';

export interface ApartmentMixItem {
  type: string;
  percent: number;
  area: string;
  count: number;
  color: string;
}

export interface ApartmentDataItem {
  mix: ApartmentMixItem[];
  totalUnits: number;
  avgArea: number;
  totalArea: number;
  description: string;
}

export interface ApartmentDataMap {
  [key: string]: ApartmentDataItem;
}

// ==================== ПЛАНИРОВКИ ====================

export interface RoomDetail {
  name: string;
  area: string;
  details: string;
}

export interface ApartmentLayout {
  type: string;
  description: string;
  rooms: RoomDetail[];
}

export interface DetailedLayoutItem {
  title: string;
  concept: string;
  apartments: ApartmentLayout[];
}

export interface DetailedLayoutsMap {
  [key: string]: DetailedLayoutItem;
}

// ==================== ФИНАНСЫ ====================

export interface FinancialMetricsItem {
  pricePerSqm: number;
  avgUnitPrice: number;
  totalRevenue: number;
  parkingSpaces: number;
  parkingPrice: number;
  constructionCostPerSqm: number;
  marginPercent: number;
}

export interface FinancialMetricsMap {
  [key: string]: FinancialMetricsItem;
}

export interface ComparisonDataItem {
  name: string;
  revenue: number;
  margin: number;
  avgPrice: number;
  liquidity: number;
}

// ==================== ВСПОМОГАТЕЛЬНЫЕ ТИПЫ ====================

export interface AreaRangeItem {
  type: string;
  min: number;
  max: number;
  avg: number;
}

export interface ParsedAreaRange {
  min: number;
  max: number;
  avg: number;
}

// ==================== PROPS КОМПОНЕНТОВ ====================

export interface DetailModalProps {
  showDetailModal: boolean;
  setShowDetailModal: (show: boolean) => void;
  buildingClass: BuildingClass;
  detailedLayouts: DetailedLayoutsMap;
}

export interface MetricsCardsProps {
  totalUnits: number;
  totalArea: number;
  pricePerSqm: number;
  marginPercent: number;
}

export interface ComparisonChartProps {
  data: ComparisonDataItem[];
  visible: boolean;
}

export interface PieChartSectionProps {
  data: ApartmentMixItem[];
}

export interface BarChartSectionProps {
  data: AreaRangeItem[];
}

export interface DetailedTableProps {
  mix: ApartmentMixItem[];
  totalUnits: number;
  avgUnitPrice: number;
  totalRevenue: number;
  pricePerSqm: number;
}

export interface FinancialMetricsSectionProps {
  metrics: FinancialMetricsItem;
  totalArea: number;
}

export interface BuildingClassInfoProps {
  buildingClass: BuildingClass;
}

export interface ClassSelectorProps {
  currentClass: BuildingClass;
  onClassChange: (buildingClass: BuildingClass) => void;
}

export interface ClassButtonConfig {
  key: BuildingClass;
  label: string;
  activeClass: string;
}
