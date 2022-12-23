import React from "react";
import { ProfileHeaderProps } from "../types/types";

const ProfileHeader = ({ userName, profileUrl }: ProfileHeaderProps) => {
  return (
    <div className="space-y-1">
      <h1 className="text-5xl">{userName}</h1>
      <h2 className="text-lg">{profileUrl}</h2>
    </div>
  );
};

export default ProfileHeader;
