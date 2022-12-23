import React from "react";
import ElementSVG from "./ElementSVG";
import { ElementCellProps } from "../types/types";

const ElementCell = ({ element, fill }: ElementCellProps) => {
  return (
    <div className="box-border h-32 p-4 border-2 md:w-32">
      <ElementSVG fill={fill} />
      <p className="text-center text-xs">{element}</p>
    </div>
  );
};

export default ElementCell;
