import { ArrowLeftRight } from "lucide-react";
import type { ConverterCardProps } from "./ConverterCard.types";

export const ConverterCard = ({
  gram,
  aed,
  onGramChange,
  onAedChange,
}: ConverterCardProps) => (
  <div className="bg-card-light dark:bg-card-dark p-6 rounded-2xl shadow-sm">
    <div className="flex items-center justify-between space-x-4">
      <div className="flex-1">
        <label
          className="block text-xs font-medium text-text-secondary-light dark:text-text-secondary-dark"
          htmlFor="gram"
        >
          GRAM
        </label>
        <input
          className="w-full bg-transparent border-0 border-b-2 border-border-light dark:border-border-dark focus:ring-0 focus:outline-none focus:border-0 focus:border-b-0 p-2 text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark"
          id="gram"
          placeholder="0.0"
          type="text"
          value={gram}
          onChange={onGramChange}
        />
      </div>
      <button
        type="button"
        className="flex-shrink-0 bg-white p-3 rounded-full mt-4 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <ArrowLeftRight className="text-primary text-2xl" />
      </button>
      <div className="flex-1 text-right">
        <label
          className="block text-xs font-medium text-text-secondary-light dark:text-text-secondary-dark"
          htmlFor="aed"
        >
          AED
        </label>
        <input
          className="w-full bg-transparent border-0 border-b-2 border-border-light dark:border-border-dark focus:ring-0 focus:outline-none focus:border-0 focus:border-b-0 p-2 text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark text-right"
          id="aed"
          placeholder="0.0"
          type="text"
          value={aed}
          onChange={onAedChange}
        />
      </div>
    </div>
  </div>
);
