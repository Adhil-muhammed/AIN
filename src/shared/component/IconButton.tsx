import React from "react";
import { Button } from "@/components/ui/button";
import type { IconButtonProps } from "./IconButton.types";

export const IconButton = ({
  Icon = "",
  icon = "",
  image = "",
  size = "icon",
  variant = "default",
  className = "",
  alt = "",
  ...props
}: IconButtonProps) => {
  const imageSrc = image || icon; // Support both image and icon props
  
  return (
    <Button
      variant={variant}
      size={size}
      className={`flex items-center justify-center ${className}`}
      {...props}
    >
      {Icon && typeof Icon !== "string" && <Icon className="h-5 w-5" />}

      {imageSrc && (
        <img src={imageSrc} alt={alt} className="h-5 w-5 object-contain" />
      )}
    </Button>
  );
};

