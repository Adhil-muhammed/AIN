import { ChangeEvent } from "react";

export interface ConverterCardProps {
  gram: string;
  aed: string;
  onGramChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAedChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

