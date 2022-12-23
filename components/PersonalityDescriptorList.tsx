import React from "react"
import { PersonalitySummaryTableProps, Descriptor } from "../types/types"
import PersonalityDescriptorCell from "./PersonalityDescriptorCell";

const PersonalityDescriptorList = ({
  traits,
}: PersonalitySummaryTableProps) => {
  const renderCells = (traits: Descriptor[]) => {
    let results = [];

    for (let i = 0; i < traits?.length; i++) {
      let t = traits[i];

      results.push(
        <li key={i}>
          <PersonalityDescriptorCell trait={t} />
        </li>
      );
    }

    return results;
  };

  return (
    <ul className="list-none">
      {traits && traits.length > 0 ? (
        renderCells(traits)
      ) : (
        <p>No traits found</p>
      )}
    </ul>
  );
};

export default PersonalityDescriptorList;
