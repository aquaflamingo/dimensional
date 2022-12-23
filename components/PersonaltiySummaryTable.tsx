const PersonalitySummaryTable = ({ traits }: PersonalitySummaryTableProps) => {
  return (
    <div>
      <div>
        <h3 className="text-lg bg-gray-50 text-black px-2 py-2">
          Personality Summary
        </h3>
      </div>
      <PersonalityTraitList traits={traits} />
    </div>
  );
};
