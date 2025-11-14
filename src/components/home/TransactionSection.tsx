import type { TransactionSectionProps } from "./TransactionSection.types";
import buyingPriceCircle from "@/assets/svg/buying-price-circle.svg";

export const TransactionSection = ({
  activeToggle,
  setActiveToggle,
}: TransactionSectionProps) => (
  <div className="flex justify-between items-center">
    <div className="flex items-center gap-3">
      <img src={buyingPriceCircle} alt="buyingPriceCircle" />
      <div>
        <h4 className="text-sm font-semibold tracking-wide text-gray-800">
          BUYING PRICE
        </h4>
        <p className="text-base font-bold">24K</p>
      </div>
    </div>
    <div
      className="flex rounded-full p-1"
      style={{ background: "rgba(217, 217, 217, 1)" }}
    >
      <button
        className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
          activeToggle === "buy" ? "bg-[#8A1538] text-white" : "text-black-500"
        }`}
        onClick={() => setActiveToggle("buy")}
      >
        Buy
      </button>
      <button
        className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
          activeToggle === "sell" ? "bg-[#8A1538] text-white" : "text-black-500"
        }`}
        onClick={() => setActiveToggle("sell")}
      >
        Sell
      </button>
    </div>
  </div>
);
