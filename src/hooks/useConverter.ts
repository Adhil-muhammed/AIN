import { useState } from "react";
import { gramToAed, aedToGram } from "../utils/calculations";
import { GOLD_PRICE_PER_GRAM } from "../constants/prices";

export const useConverter = (initialGram = "10") => {
  const [gram, setGram] = useState(initialGram);
  const [aed, setAed] = useState(gramToAed(initialGram, GOLD_PRICE_PER_GRAM));

  const handleGramChange = (e) => {
    const value = e.target.value;
    setGram(value);
    if (value === "" || isNaN(parseFloat(value)) || parseFloat(value) < 0) {
      setAed("");
    } else {
      setAed(gramToAed(value, GOLD_PRICE_PER_GRAM));
    }
  };

  const handleAedChange = (e) => {
    const value = e.target.value;
    setAed(value);
    if (value === "" || isNaN(parseFloat(value)) || parseFloat(value) < 0) {
      setGram("");
    } else {
      setGram(aedToGram(value, GOLD_PRICE_PER_GRAM));
    }
  };

  return { gram, aed, handleGramChange, handleAedChange };
};
