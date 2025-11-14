import * as React from "react";
import { type ButtonProps } from "@/components/ui/button.types";

export interface IconButtonProps extends Omit<ButtonProps, "children"> {
  Icon?: React.ComponentType<{ className?: string }> | string;
  icon?: string; // Alias for image prop (for backward compatibility)
  image?: string;
  alt?: string;
}

