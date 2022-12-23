import React from "react";
import { ElementSVGProps } from "../types/types";

const ElementSVG = ({ fill }: ElementSVGProps) => {
  return (
    <div className="flex w-full justify-center">
      <svg width="64" height="64">
        <circle
          cx="32"
          cy="32"
          r="15"
          stroke={fill}
          strokeWidth="24"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default ElementSVG;
