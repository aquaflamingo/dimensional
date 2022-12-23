import React from "react"
import { ProfileImageProps } from "../types/types"
import Image from "next/image"

const ProfileImage = ({ src }: ProfileImageProps) => {
  return (
    <div className="justify-center w-full py-5 flex">
      <Image
        src={src}
        width="150"
        height="150"
        className="rounded-full shadow-sm"
        alt=""
      />
    </div>
  );
}

export default ProfileImage
