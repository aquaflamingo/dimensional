import React from "react";
import ElementCell from "./ElementCell";
import { Element, EndorsedElementsGridProps } from "../types/types";

const EndorsedElements = ({ elements }: EndorsedElementsGridProps) => {
  const renderCells = (elements: Element[]) => {
    let results = [];

    for (let i = 0; i < elements.length; i++) {
      let t = elements[i];
      let fill = t.colorHexCodes.length > 0 ? t.colorHexCodes[0] : "#FFF";

      results.push(
        <li className="list-none" key={i}>
          <ElementCell element={t.name} fill={fill} />
        </li>
      );
    }

    return results;
  };

  return (
    <div>
      <h3 className="text-lg py-2">Most Endorsed Elements</h3>
      <div className="md:grid md:grid-cols-6 flex overflow-x-auto gap-1">
        {elements && elements.length > 0
          ? renderCells(elements)
          : "No elements found"}
      </div>
    </div>
  );
};

export default EndorsedElements;
