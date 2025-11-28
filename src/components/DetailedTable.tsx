import type { DetailedTableProps } from '../types';
import { formatNumber, calculateAvgPrice, calculateTotalRevenue } from '../utils';

const DetailedTable = ({ mix, totalUnits, avgUnitPrice, totalRevenue, pricePerSqm }: DetailedTableProps) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        Детальная структура квартир
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-3 text-left">Тип</th>
              <th className="border border-gray-300 px-4 py-3 text-center">Площадь (м²)</th>
              <th className="border border-gray-300 px-4 py-3 text-center">Доля (%)</th>
              <th className="border border-gray-300 px-4 py-3 text-center">Количество</th>
              <th className="border border-gray-300 px-4 py-3 text-right">Средняя цена ($)</th>
              <th className="border border-gray-300 px-4 py-3 text-right">Выручка ($)</th>
            </tr>
          </thead>
          <tbody>
            {mix.map((item, index) => {
              const avgPrice = calculateAvgPrice(item.area, pricePerSqm);
              const itemRevenue = calculateTotalRevenue(item.area, pricePerSqm, item.count);
              const rowClass = item.count === 0 ? 'hover:bg-gray-100 opacity-50' : 'hover:bg-gray-100';

              return (
                <tr key={index} className={rowClass}>
                  <td className="border border-gray-300 px-4 py-3 font-semibold">{item.type}</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">{item.area}</td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-medium">
                    {item.percent}%
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center font-semibold">
                    {item.count} шт
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-right font-semibold">
                    {item.count > 0 ? '$' + formatNumber(avgPrice) : '-'}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-right font-semibold text-green-600">
                    {item.count > 0 ? '$' + formatNumber(itemRevenue) : '-'}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="bg-gray-200 font-bold">
              <td colSpan={3} className="border border-gray-300 px-4 py-3 text-right">ИТОГО:</td>
              <td className="border border-gray-300 px-4 py-3 text-center">{totalUnits} шт</td>
              <td className="border border-gray-300 px-4 py-3 text-right">
                ${formatNumber(Math.round(avgUnitPrice))}
              </td>
              <td className="border border-gray-300 px-4 py-3 text-right text-green-700">
                ${formatNumber(totalRevenue)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default DetailedTable;
