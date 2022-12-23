import React, { useState, useEffect, Suspense } from "react";
import { UserProfileResponse, UserPersonalityResponse } from "../types/types";
import { BaseURL, GetProfileSummary, ListProfiles } from "../utils/urls";
import SuspenseLoader from "./SuspenseLoader";
import ProfileBio from "./ProfileBio";
import ProfileContent from "./ProfileContent";

const Profile = () => {
  const [profile, setProfile] = useState<UserProfileResponse>();
  const [personality, setPersonality] = useState<UserPersonalityResponse>();
  const [error, setError] = useState();

  // Fetch profile
  // componentDidMount
  useEffect(() => {
    const profileURL = BaseURL + ListProfiles;
    fetch(profileURL)
      .then((r) => r.json())
      .then((r) => {
        console.log("Fetched profile");
        // Single profile
        setProfile(r[0]);
      })
      .catch((err) => {
        console.error(`Error fetching Profile:`, err);
        setError(err);
      });
  }, []);

  // Fetch personality
  // Triggers on each profile change
  useEffect(() => {
    if (profile === undefined) return;

    const personalityUrl = BaseURL + GetProfileSummary(profile!.id);
    fetch(personalityUrl)
      .then((r) => r.json())
      .then((r) => {
        console.log("Fetched personality");
        // Single profile
        setPersonality(r);
      })
      .catch((err) => {
        console.error(`Error fetching personality:`, err);
        setError(err);
      });
  }, [profile]);

  return (
    <Suspense fallback={<SuspenseLoader message="Loading please wait..." />}>
      {error && (
        <p className="bg-red text-white">Error fetching profile: {error}</p>
      )}

      {profile && personality && (
        <div className="md:grid md:grid-cols-4 md:gap-5 px-5 z-0">
          <ProfileBio description={profile.description} />
          <ProfileContent personality={personality} profile={profile} />
        </div>
      )}
    </Suspense>
  );
};

export default Profile;
