import React from "react"
import { PersonalityDescriptorCellProps, DescriptorValue } from "../types/types"

const PersonalityDescriptorCell = ({
  trait,
}: PersonalityDescriptorCellProps) => {
  const renderDescriptorValue = (tv: DescriptorValue[]) => {
    let results = tv.map((tv: DescriptorValue) => {
      if (!tv.highlighted) {
        return <span className="text-gray-500">{tv.text} </span>;
      } else {
        return <span className="decoration-white">{tv.text} </span>;
      }
    });

    return results;
  };

  return (
    <div className="grid grid-cols-2 py-2 border-solid border-2 border-sky-50">
      <div className="text-left px-2">
        <p>{trait.name}</p>
      </div>
      <div className="text-right px-2">
        <p>{renderDescriptorValue(trait.values)}</p>
      </div>
    </div>
  );
};

export default PersonalityDescriptorCell
