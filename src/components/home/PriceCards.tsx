export const PriceCards = () => (
  <div className="grid grid-cols-2 gap-4">
    <div className="bg-[#F1B93B] text-black rounded-xl p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium">Gold/gm</h3>
        <div className="w-5 h-5 rounded-full bg-black/10 flex justify-center items-center font-bold cursor-pointer">
          +
        </div>
      </div>
      <p className="text-xl font-bold mb-1">439.25 AED</p>
      <div className="flex items-center text-sm font-medium text-red-600">
        <span>-0.07%</span>
        <span className="ml-1">▼</span>
      </div>
    </div>
    <div className="bg-gray-100 text-gray-800 rounded-xl p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium">Silver/gm</h3>
        <div className="w-5 h-5 rounded-full bg-black/10 flex justify-center items-center font-bold cursor-pointer">
          +
        </div>
      </div>
      <p className="text-xl font-bold mb-1">5.20 AED</p>
      <div className="flex items-center text-sm font-medium text-green-600">
        <span>-0.07%</span>
        <span className="ml-1">▲</span>
      </div>
    </div>
  </div>
);
