import React from "react"
import { AdjectivesListProps } from "../types/types"

const AdjectivesList = ({ adjectives }: AdjectivesListProps) => {
  return (
    <div>
      <h3 className="text-lg">Adjectives</h3>
      <p>
        {adjectives && adjectives.length > 0
          ? adjectives.join(", ")
          : "No adjectives given"}
      </p>
    </div>
  );
};

export default AdjectivesList
