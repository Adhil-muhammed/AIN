import React, { useState } from "react";
import { GenericHeader } from "../components/layout/GenericHeader";
import { PromoCard } from "../components/home/PromoCard";
import { PriceCards } from "../components/home/PriceCards";
import { ConverterCard } from "../components/home/ConverterCard";
import { useConverter } from "../hooks/useConverter";
import { PaginationDots } from "../components/home/PaginationDots";
import { TransactionSection } from "../components/home/TransactionSection";
import { HomeProduct } from "./HomeProduct";

export const HomePage = () => {
  const [activeToggle, setActiveToggle] = useState("buy");
  const { gram, aed, handleGramChange, handleAedChange } = useConverter();
  return (
    <>
      <GenericHeader />
      <div className="p-4 flex flex-col gap-6 pt-16">
        <PromoCard />
        <PaginationDots />
        <PriceCards />
        <TransactionSection
          activeToggle={activeToggle}
          setActiveToggle={setActiveToggle}
        />
        <ConverterCard
          gram={gram}
          aed={aed}
          onGramChange={handleGramChange}
          onAedChange={handleAedChange}
        />
        <button className="w-full py-4 bg-[#8A1538] text-white border-none rounded-xl text-lg font-semibold cursor-pointer mt-4 hover:bg-[#8A1538]/90 transition-colors">
          {activeToggle === "buy" ? "Buy" : "Sell"}
        </button>
        <HomeProduct />
      </div>
    </>
  );
};
