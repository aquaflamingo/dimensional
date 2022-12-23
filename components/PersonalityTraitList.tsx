const PersonalityTraitList = ({ traits }: PersonalitySummaryTableProps) => {
  const renderCells = (traits: Trait[]) => {
    let results = [];

    for (let i = 0; i < traits?.length; i++) {
      let t = traits[i];

      results.push(
        <li key={i}>
          <PersonalityTraitCell trait={t} />
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
