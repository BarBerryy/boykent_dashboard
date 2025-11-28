import type { DetailModalProps } from '../types';

const DetailModal = ({ showDetailModal, setShowDetailModal, buildingClass, detailedLayouts }: DetailModalProps) => {
  if (!showDetailModal) return null;

  const currentLayout = detailedLayouts[buildingClass];

  if (!currentLayout) {
    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={() => setShowDetailModal(false)}
      >
        <div 
          className="bg-white rounded-xl max-w-2xl w-full p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Детальная планировка</h2>
            <button
              onClick={() => setShowDetailModal(false)}
              className="text-gray-500 hover:text-gray-700 text-3xl font-bold"
            >
              ×
            </button>
          </div>
          <p className="text-gray-600 text-center py-8">
            Детальная планировка для этого класса находится в разработке
          </p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={() => setShowDetailModal(false)}
    >
      <div 
        className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Заголовок */}
        <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-t-xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">{currentLayout.title}</h2>
              <p className="text-indigo-100 text-sm">{currentLayout.concept}</p>
            </div>
            <button
              onClick={() => setShowDetailModal(false)}
              className="text-white hover:text-indigo-200 text-4xl font-bold leading-none"
            >
              ×
            </button>
          </div>
        </div>

        {/* Содержимое */}
        <div className="p-6">
          {currentLayout.apartments.map((apt, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-indigo-500 p-4 rounded-lg mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{apt.type}</h3>
                <p className="text-gray-600 text-sm italic">{apt.description}</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">Помещение</th>
                      <th className="border border-gray-300 px-4 py-2 text-center font-semibold text-gray-700 w-24">Площадь</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">Описание</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apt.rooms.map((room, roomIndex) => (
                      <tr key={roomIndex} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium text-gray-800">{room.name}</td>
                        <td className="border border-gray-300 px-4 py-2 text-center text-indigo-600 font-semibold">{room.area}</td>
                        <td className="border border-gray-300 px-4 py-2 text-gray-600 text-sm">{room.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          <div className="mt-6 text-center">
            <button
              onClick={() => setShowDetailModal(false)}
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg"
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
