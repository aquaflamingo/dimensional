const Base = "https://us-central1-dimensional-test-9f5ab.cloudfunctions.net/app/"

const ListProfiles = `/profiles`
const GetProfileSummary = (id : string) => `/profileSummaries/${id}`

const ListTraits = `/traits`

export {
	ListTraits,
	ListProfiles,
	GetProfileSummary,
	Base
}
