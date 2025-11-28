const Recommendations = () => {
  return (
    <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
      <h4 className="font-bold text-gray-800 mb-2">💡 Ключевые рекомендации:</h4>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li><strong>Приоритет продаж:</strong> начать с 2-комнатных (30-32%)</li>
        <li><strong>Инвесторам:</strong> предложить 1-комнатные с гарантией аренды</li>
        <li><strong>Семейный сегмент:</strong> 3-комнатные с улучшенными планировками</li>
        <li><strong>Студии:</strong> продавать последними</li>
        <li><strong>Паркинг:</strong> 512 мест = 0.8 на квартиру</li>
        <li><strong>Ценообразование:</strong> дифференцировать по этажам (±5-10%)</li>
      </ul>
    </div>
  );
};

export default Recommendations;
