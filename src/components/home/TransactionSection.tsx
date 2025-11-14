export const TransactionSection = ({ activeToggle, setActiveToggle }) => (
  <div className="flex justify-between items-center">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-[#F1B93B] flex justify-center items-center text-white">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      </div>
      <div>
        <h4 className="text-sm font-semibold tracking-wide text-gray-800">
          BUYING PRICE
        </h4>
        <p className="text-base font-bold">24K</p>
      </div>
    </div>
    <div className="flex bg-gray-100 rounded-full p-1">
      <button
        className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
          activeToggle === "buy" ? "bg-[#8A1538] text-white" : "text-gray-500"
        }`}
        onClick={() => setActiveToggle("buy")}
      >
        Buy
      </button>
      <button
        className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
          activeToggle === "sell" ? "bg-[#8A1538] text-white" : "text-gray-500"
        }`}
        onClick={() => setActiveToggle("sell")}
      >
        Sell
      </button>
    </div>
  </div>
);
