const Profile = () => {
  const [profile, setProfile] = useState<UserProfileResponse>();
  const [personality, setPersonality] = useState<UserPersonalityResponse>();

  useEffect(() => {
    setProfile(ProfileFixture[0]);
    setPersonality(PersonalityFixture);
  }, []);

  return (
    <Provider url={BaseURL}>
      <Suspense fallback="Loading...">
        {profile && personality && (
          <div className="md:grid md:grid-cols-4 md:gap-5 px-5 z-0">
            <ProfileBio description={profile.description} />
            <ProfileContent personality={personality} profile={profile} />
          </div>
        )}
      </Suspense>
    </Provider>
  );
};
