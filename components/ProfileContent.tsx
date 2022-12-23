import React from "react";
import {
  ProfileContentProps,
  Element,
  DescriptorValue,
  Descriptor,
} from "../types/types";
import AdjectivesList from "./AdjectivesList";
import PersonalitySummaryTable from "./PersonaltiySummaryTable";
import EndorsedElements from "./EndorsedElements";
import ProfileHeader from "./ProfileHeader";

const ProfileContent = ({ personality, profile }: ProfileContentProps) => {
  const adjs: string[] = profile?.adjectives;
  const elements: Element[] = profile?.mostEndorsedElements;
  const descriptors: Descriptor[] = personality.summaryTableRows.map((row) => {
    let values: DescriptorValue[] = row.values.map((v) => {
      return { text: v.text, highlighted: v.isHighlighted };
    });

    return { name: row.title, values: values };
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

export default ProfileContent;
