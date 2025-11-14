import type { ConverterCardProps } from "./ConverterCard.types";

export const ConverterCard = ({
  gram,
  aed,
  onGramChange,
  onAedChange,
}: ConverterCardProps) => (
  <div
    className="rounded-xl p-5 flex justify-between items-center h-[145px]"
    style={{ background: "rgba(239, 239, 239, 1)" }}
  >
    <div className="flex flex-col">
      <label htmlFor="gram" className="text-xl font-medium mb-2 ">
        GRAM
      </label>
      <input
        id="gram"
        type="number"
        value={gram}
        onChange={onGramChange}
        placeholder="10 gm"
        className="border-b-2 border-black bg-transparent text-base pb-1 w-28 font-medium text-gray-800 focus:outline-none focus:ring-0 focus:border-[#b8b7b5]"
      />
    </div>
    <div className="text-2xl text-black cursor-pointer mt-5">&#8644;</div>
    <div className="flex flex-col">
      <label htmlFor="aed" className="text-xl font-medium mb-2">
        AED
      </label>
      <input
        id="aed"
        type="number"
        value={aed}
        onChange={onAedChange}
        placeholder="4000 AED"
        // background: rgba(9, 16, 9, 0.59);
        style={{ color: "rgba(9, 16, 9, 0.59);" }}
        className="border-b-2 border-black bg-transparent text-base pb-1 w-28 font-medium text-gray-800 focus:outline-none focus:ring-0 focus:border-[#b8b7b5]"
      />
    </div>
  </div>
);
