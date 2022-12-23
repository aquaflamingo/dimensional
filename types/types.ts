export type ProfileSummaryProps = {
  description: string;
};

export type ProfileImageProps = {
  src: string;
};

export interface UserProfileResponse {
  description: string;
  userName: string;
  profileUrl: string;
  adjectives: string[];
  id: string;
  mostEndorsedElements: Element[];
}

export interface SummaryTableValue {
  text: string;
  isHighlighted: boolean;
}

export interface SummaryTableRow {
  title: string;
  values: SummaryTableValue[];
}

export interface UserPersonalityResponse {
  summaryTableRows: SummaryTableRow[];
}

export type ProfileHeaderProps = {
  userName: string;
  profileUrl: string;
};

export type ProfileContentProps = {
  profile: UserProfileResponse;
  personality: UserPersonalityResponse;
};

export type AdjectivesListProps = {
  adjectives: string[];
};

export type PersonalitySummaryTableProps = {
  traits: Descriptor[];
};

export type PersonalityDescriptorCellProps = {
  trait: Descriptor;
};

export interface DescriptorValue {
  text: string;
  highlighted: boolean;
}

export interface Descriptor {
  name: string;
  values: DescriptorValue[];
}

export interface Element {
  name: string;
  colorHexCodes: string[];
  score: number | null;
}

export type EndorsedElementsGridProps = {
  elements: Element[];
};

export type ElementCellProps = {
  fill: string;
  element: string;
};

export type ElementSVGProps = {
  fill: string;
};

export type SuspenseLoaderProps = {
  message: string;
};
