const BaseURL =
  "https://us-central1-dimensional-test-9f5ab.cloudfunctions.net/app/";

const ListProfiles = `/profiles`;
const GetProfileSummary = (id: string) => `/personalitySummaries/${id}`;

const ListTraits = `/traits`;

export { ListTraits, ListProfiles, GetProfileSummary, BaseURL };
