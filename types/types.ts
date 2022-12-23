type ProfileSummaryProps = {
  description: string;
};

type ProfileImageProps = {
  src: string;
};

interface UserProfileResponse {
  description: string;
  userName: string;
  profileUrl: string;
  adjectives: string[];
  id: string;
  mostEndorsedElements: Element[];
}

interface SummaryTableValue {
  text: string;
  isHighlighted: boolean;
}

interface SummaryTableRow {
  title: string;
  values: SummaryTableValue[];
}

interface UserPersonalityResponse {
  summaryTableRows: SummaryTableRow[];
}

type ProfileHeaderProps = {
  userName: string;
  profileUrl: string;
};

type ProfileContentProps = {
  // TODO
  profile: UserProfileResponse;
  personality: UserPersonalityResponse;
};

type AdjectivesListProps = {
  adjectives: string[];
};

type PersonalitySummaryTableProps = {
  traits: Trait[];
};


interface TraitValue {
  text: string;
  highlighted: boolean;
}

interface Trait {
  traitName: string;
  traitValues: TraitValue[];
}

type PersonalityTraitCellProps = {
  trait: Trait;
};


interface Element {
  name: string;
  colorHexCodes: string[];
  score: number | null;
}

type EndorsedElementsGridProps = {
  elements: Element[];
};


type ElementCellProps = {
  fill: string;
  element: string;
};


type ElementSVGProps = {
  fill: string;
};

export {
	ElementSVGProps, 
	ElementCellProps, 
	Element,
	EndorsedElementsGridProps, 
	PersonalityTraitCellProps,
	PersonalitySummaryTableProps, 
	UserProfileResponse, 
	UserPersonalityResponse,
	Trait,
	TraitValue,
	ProfileImageProps.
	ProfileHeaderProps,
	ProfileSummaryProps,
	ProfileContentProps,
	AdjectivesListProps,
	SummaryTableRow,
	SummaryTableValue
}

