const PersonalityTraitCell = ({ trait }: PersonalityTraitCellProps) => {
  // TODO slashes missing and highlight
  const renderTraitValue = (tv: TraitValue[]) => {
    let results = tv.map((tv: TraitValue) => {
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
        <p>{trait.traitName}</p>
      </div>
      <div className="text-right px-2">
        <p>{renderTraitValue(trait.traitValues)}</p>
      </div>
    </div>
  );
};
