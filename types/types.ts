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
  profile: UserProfileResponse;
  personality: UserPersonalityResponse;
};

type AdjectivesListProps = {
  adjectives: string[];
};

type PersonalitySummaryTableProps = {
  traits: Descriptor[];
};


type PersonalityDescriptorCellProps = {
  trait: Descriptor;
};

interface DescriptorValue {
  text: string;
  highlighted: boolean;
}

interface Descriptor {
  name: string;
  values: DescriptorValue[];
}

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


type SuspenseLoaderProps = {
  message: string;
};

export {
	SuspenseLoaderProps,
	ElementSVGProps, 
	ElementCellProps, 
	Element,
	EndorsedElementsGridProps, 
	PersonalitySummaryTableProps, 
	UserProfileResponse, 
	UserPersonalityResponse,
	ProfileImageProps,
	ProfileHeaderProps,
	ProfileSummaryProps,
	ProfileContentProps,
	AdjectivesListProps,
	PersonalityDescriptorCellProps, 
	DescriptorValue,
	Descriptor,
	SummaryTableRow,
	SummaryTableValue
}

