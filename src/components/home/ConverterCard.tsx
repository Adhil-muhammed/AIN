export const ConverterCard = ({ gram, aed, onGramChange, onAedChange }) => (
  <div className="bg-gray-50 rounded-xl p-5 flex justify-between items-center">
    <div className="flex flex-col">
      <label htmlFor="gram" className="text-xs text-gray-500 mb-2">
        GRAM
      </label>
      <input
        id="gram"
        type="number"
        value={gram}
        onChange={onGramChange}
        placeholder="10 gm"
        className="border-none border-b-2 border-gray-200 bg-transparent text-base pb-1 w-28 font-medium text-gray-800 focus:outline-none focus:ring-0 focus:border-[#F1B93B]"
      />
    </div>
    <div className="text-2xl text-gray-600 cursor-pointer mt-5">&#8644;</div>
    <div className="flex flex-col">
      <label htmlFor="aed" className="text-xs text-gray-500 mb-2">
        AED
      </label>
      <input
        id="aed"
        type="number"
        value={aed}
        onChange={onAedChange}
        placeholder="4000 AED"
        className="border-none border-b-2 border-gray-200 bg-transparent text-base pb-1 w-28 font-medium text-gray-800 focus:outline-none focus:ring-0 focus:border-[#F1B93B]"
      />
    </div>
  </div>
);
