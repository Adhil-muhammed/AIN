export type ToggleValue = "buy" | "sell";

export interface TransactionSectionProps {
  activeToggle: ToggleValue;
  setActiveToggle: (value: ToggleValue) => void;
}

