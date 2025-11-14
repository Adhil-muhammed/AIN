import type { TransactionSectionProps } from "./TransactionSection.types";
import buyingPriceCircle from "@/assets/svg/buying-price-circle.svg";
import { motion } from "framer-motion";

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
      className="flex rounded-full p-1 relative"
      style={{ background: "rgba(217, 217, 217, 1)" }}
    >
      <motion.div
        className="absolute rounded-full bg-[#8A1538]"
        // initial={false}
        animate={{
          x: activeToggle === "buy" ? 0 : "100%",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        style={{
          width: "calc(50% - 4px)",
          height: "calc(100% - 8px)",
          top: "4px",
          left: "4px",
        }}
      />
      <button
        className={`relative z-10 px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
          activeToggle === "buy" ? "text-white" : "text-black-500"
        }`}
        onClick={() => setActiveToggle("buy")}
      >
        Buy
      </button>
      <button
        className={`relative z-10 px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
          activeToggle === "sell" ? "text-white" : "text-black-500"
        }`}
        onClick={() => setActiveToggle("sell")}
      >
        Sell
      </button>
    </div>
  </div>
);
