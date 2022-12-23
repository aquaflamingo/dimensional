const ProfileContent = ({ personality, profile }: ProfileContentProps) => {
  const adjs: string[] = profile?.adjectives;
  const elements: Element[] = profile?.mostEndorsedElements;
  const descriptors: Trait[] = personality.summaryTableRows.map((row) => {
    let values: TraitValue[] = row.values.map((v) => {
      return { text: v.text, highlighted: v.isHighlighted };
    });

    return { traitName: row.title, traitValues: values };
  });

  return (
    <div className="col-span-3 py-3 space-y-4 px-5 md:px-10">
      <ProfileHeader
        userName={profile?.userName}
        profileUrl={profile?.profileUrl}
      />
      <PersonalitySummaryTable traits={descriptors} />
      <EndorsedElements elements={elements} />
      <AdjectivesList adjectives={adjs} />
    </div>
  );
};
