import type { BuildingClassInfoProps } from '../types';

const BuildingClassInfo = ({ buildingClass }: BuildingClassInfoProps) => {
  if (buildingClass === 'new_optimal') {
    return (
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded mb-8">
        <h4 className="font-bold text-gray-800 mb-3 text-xl">✅ Почему эта квартирография оптимальна:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-semibold text-gray-700 mb-2">📈 Рыночные преимущества:</h5>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>30% двухкомнатных - максимальный спрос</li>
              <li>32% однокомнатных - для инвесторов</li>
              <li>Только 5% студий - избегаем перенасыщения</li>
              <li>14% трехкомнатных - для семей с детьми</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-700 mb-2">💎 Финансовые преимущества:</h5>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Средняя площадь 62.5 м²</li>
              <li>Цена $1,750/м²</li>
              <li>Маржа 42% - выше всех аналогов</li>
              <li>Выручка $78M - максимальная</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  if (buildingClass === 'osii_optimal') {
    return (
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-500 p-6 rounded mb-8">
        <h4 className="font-bold text-gray-800 mb-3 text-xl">✅ Бойкент (Динамика) — Оптимизация под рынок 2025:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-semibold text-gray-700 mb-2">📉 Шринкфляция площадей:</h5>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Студии: 25-31 м² (было 38-42)</li>
              <li>1-комн: 34-42 м² (было 45-52)</li>
              <li>2-комн: 47-58 м² (было 60-70)</li>
              <li>3-комн: 63-75 м² (было 80-92)</li>
              <li>Средняя площадь: 49.2 м² (-21%)</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-700 mb-2">📊 Структурные изменения:</h5>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Студии: 10% (рост спроса молодёжи)</li>
              <li>1-комн + Евро-2: 35% (инвесторы)</li>
              <li>2-комн + Евро-3: 40% (семьи)</li>
              <li>3+ комн: 15% (сокращение)</li>
              <li>Ликвидность: 93% (максимум)</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-4 bg-white rounded-lg">
          <h5 className="font-semibold text-gray-700 mb-2">🎯 Ключевые тренды 2025:</h5>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="p-3 bg-teal-50 rounded">
              <strong>Евроформаты:</strong> 27% квартир (1+ и 2+) — кухня-гостиная + спальни
            </div>
            <div className="p-3 bg-cyan-50 rounded">
              <strong>Инвест-лоты:</strong> 45% — студии и 1-комн для аренды (доходность 8.5%)
            </div>
            <div className="p-3 bg-blue-50 rounded">
              <strong>Цена входа:</strong> от $42,500 (студия) — доступная ипотека
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (buildingClass === 'market_trends') {
    return (
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6 rounded mb-8">
        <h4 className="font-bold text-gray-800 mb-3 text-xl">✅ Бойкент (Тренды) - Оптимизация под рынок:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h5 className="font-semibold text-gray-700 mb-2">📊 Ключевые изменения:</h5>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Студии увеличены до 8%</li>
              <li>38% малогабаритного жилья</li>
              <li>2-комнатные 32%</li>
              <li>Средняя площадь 56 м²</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-700 mb-2">💡 Преимущества:</h5>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Цена $1,680/м²</li>
              <li>Ликвидность 92%</li>
              <li>Учет демографии</li>
              <li>Маржа 39%</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default BuildingClassInfo;
