const ComparisonTable = () => {
  return (
    <div className="mt-8 bg-gray-50 rounded-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        📊 Сравнительная таблица проектов
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-3 text-left">Показатель</th>
              <th className="border border-gray-300 px-4 py-3 text-center">Комфорт</th>
              <th className="border border-gray-300 px-4 py-3 text-center bg-green-100">Бойкент (ОСИиИ)</th>
              <th className="border border-gray-300 px-4 py-3 text-center bg-purple-100">Бойкент (Тренды)</th>
              <th className="border border-gray-300 px-4 py-3 text-center bg-teal-100">Бойкент (Динамика)</th>
              <th className="border border-gray-300 px-4 py-3 text-center">Комфорт+</th>
              <th className="border border-gray-300 px-4 py-3 text-center">Бизнес</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold">Цена за м²</td>
              <td className="border border-gray-300 px-4 py-3 text-center">$1,600</td>
              <td className="border border-gray-300 px-4 py-3 text-center bg-green-50 font-bold">$1,750</td>
              <td className="border border-gray-300 px-4 py-3 text-center bg-purple-50 font-bold">$1,680</td>
              <td className="border border-gray-300 px-4 py-3 text-center bg-teal-50 font-bold">$1,700</td>
              <td className="border border-gray-300 px-4 py-3 text-center">$1,800</td>
              <td className="border border-gray-300 px-4 py-3 text-center">$2,200</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold">Средняя площадь</td>
              <td className="border border-gray-300 px-4 py-3 text-center">50.78 м²</td>
              <td className="border border-gray-300 px-4 py-3 text-center bg-green-50 font-bold">62.5 м²</td>
              <td className="border border-gray-300 px-4 py-3 text-center bg-purple-50 font-bold">56 м²</td>
              <td className="border border-gray-300 px-4 py-3 text-center bg-teal-50 font-bold">49.2 м²</td>
              <td className="border border-gray-300 px-4 py-3 text-center">50.78 м²</td>
              <td className="border border-gray-300 px-4 py-3 text-center">50.78 м²</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold">Кол-во квартир</td>
              <td className="border border-gray-300 px-4 py-3 text-center">640</td>
              <td className="border border-gray-300 px-4 py-3 text-center bg-green-50 font-bold">640</td>
              <td className="border border-gray-300 px-4 py-3 text-center bg-purple-50 font-bold">660</td>
              <td className="border border-gray-300 px-4 py-3 text-center bg-teal-50 font-bold">660</td>
              <td className="border border-gray-300 px-4 py-3 text-center">640</td>
              <td className="border border-gray-300 px-4 py-3 text-center">640</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold">Маржинальность</td>
              <td className="border border-gray-300 px-4 py-3 text-center">35%</td>
              <td className="border border-gray-300 px-4 py-3 text-center bg-green-50 font-bold">42%</td>
              <td className="border border-gray-300 px-4 py-3 text-center bg-purple-50 font-bold">39%</td>
              <td className="border border-gray-300 px-4 py-3 text-center bg-teal-50 font-bold">40%</td>
              <td className="border border-gray-300 px-4 py-3 text-center">38%</td>
              <td className="border border-gray-300 px-4 py-3 text-center">40%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold">Ликвидность</td>
              <td className="border border-gray-300 px-4 py-3 text-center">85%</td>
              <td className="border border-gray-300 px-4 py-3 text-center bg-green-50 font-bold">88%</td>
              <td className="border border-gray-300 px-4 py-3 text-center bg-purple-50 font-bold">92%</td>
              <td className="border border-gray-300 px-4 py-3 text-center bg-teal-50 font-bold">93%</td>
              <td className="border border-gray-300 px-4 py-3 text-center">80%</td>
              <td className="border border-gray-300 px-4 py-3 text-center">70%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold">Доля студий</td>
              <td className="border border-gray-300 px-4 py-3 text-center">10%</td>
              <td className="border border-gray-300 px-4 py-3 text-center bg-green-50 font-bold">5%</td>
              <td className="border border-gray-300 px-4 py-3 text-center bg-purple-50 font-bold">8%</td>
              <td className="border border-gray-300 px-4 py-3 text-center bg-teal-50 font-bold">10%</td>
              <td className="border border-gray-300 px-4 py-3 text-center">6%</td>
              <td className="border border-gray-300 px-4 py-3 text-center">2%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;
