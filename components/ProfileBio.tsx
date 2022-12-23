import React from "react"
import { ProfileSummaryProps } from "../types/types"
import ProfileImage from "./ProfileImage"

const ProfileBio = ({ description }: ProfileSummaryProps) => {
  // None given in the API
  const profileImage = "/profileimage.png";

  return (
    <div className="col-span-1">
      <ProfileImage src={profileImage} />
      <p className="md:text-left sm:text-center px-5">
        {description ? description : "No description provided"}
      </p>
    </div>
  );
};

export default ProfileBio
