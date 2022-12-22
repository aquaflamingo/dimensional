import { useState, Suspense } from "react"
import Head from 'next/head'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { BaseURL, GetProfileSummary, ListProfiles } from "../utils/urls"
import useFetch, { Provider } from 'use-http'
import {
	ProfileFixture, 
	PersonalityFixture,
	TraitFixture 
} from "../fixtures"
import Image from 'next/image'

export default function Home() {
	return (
		<>
			<Head>
				<title>Dimensional</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<div className="container mx-auto">
					<ApplicationHeader/>
					<Profile/>
				</div>
			</main>
		</>
	)
}


const ApplicationHeader = () => {
	return (
		<nav className="bg-white px-2 sm:px-4 py-2.5 rounded dark:bg-black">
			<div className="container flex flex-wrap items-center justify-between mx-auto">
				<a href="#" className="flex items-center">
					<Image src="/logo.png" width="100" height="54"/>
				</a>
				<div className="hidden w-full md:block md:w-auto" id="navbar-default">
					<ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						<li>
							<p>Search Bar here</p>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

type ElementSVGProps = {
	fill: string
}

const ElementSVG = ({ fill }: ElementSVGProps) => {
	return (
		<div className="flex w-full justify-center" >
			<svg width="50" height="50">
				<circle cx="25" cy="25" r="10" stroke={fill} strokeWidth="10" fill="none" />
			</svg>	
		</div>
	)
}

type ElementCellProps = {
	fill: string 
	element: string
}

const ElementCell = ({ element, fill }: ElementCellProps) => {
	// TODO style
	return (
		<div className="border-solid border-2"> 
			<div className="h-36">
				<ElementSVG fill={fill}/>
				<p className="text-center">{element}</p>
			</div>
		</div>
	)
}

// Traits and elements are the same?
interface Element {
	name: string
	colorHexCodes: string[]
	score: number | null 
}

type EndorsedElementsGridProps = {
	elements: Element[]
}

const EndorsedElementsGrid = ({ elements }: EndorsedElementsGridProps) => {

	// TODO: grid styling
	const renderCells = (elements : Element[]) => {
		let results = []

		for (let i=0; i<elements.length; i++) {
			let t = elements[i]
			let fill = t.colorHexCodes.length > 0 ? t.colorHexCodes[0] : "#FFF"

			results.push(
				<li className="list-none" key={i}>
					<ElementCell element={t.name} fill={fill}/>
				</li>
			)
		}

		return results
	}

	return (
		<div>
			<h3 className="text-lg">Most Endorsed Elements</h3>
			<div className="grid grid-cols-6 gap-2">
				{ elements && elements.length > 0 ? renderCells(elements) : "No elements found" }
			</div>
		</div>
	)
}

type PersonalityTraitCellProps = {
	trait: Trait
}

const PersonalityTraitCell = ({trait}: PersonalityTraitCellProps) => {
	// TODO slashes missing
	const renderTraitValue = (tv: TraitValue[]) => {
		let results = tv.map((tv: TraitValue) => {
			if (tv.highlighted) {
			return <span className="decoration-gray-50">{tv.text} </span>
			} else {
			return <span className="decoration-white">{tv.text} </span>
			}
		})

		return results
	}

	return (
		<div className="grid grid-cols-2 py-2 border-solid border-2 border-grey-500">
			<div className="content-start px-2">
				<p>{trait.traitName}</p>
			</div>
			<div className="content-end px-2">
				<p>{renderTraitValue(trait.traitValues)}</p>
			</div>
		</div>
	)
}

interface TraitValue {
	text: string 
	highlighted: boolean
}

interface Trait {
	traitName: string 
	traitValues: TraitValue[]
}

const PersonalityTraitList = ({ traits } : PersonalitySummaryTableProps) => {
	// TODO model each item
	// TODO: default state without traits
		console.log("traits inside", traits)
	const renderCells = (traits : Trait[]) => {

		let results = []

		for (let i=0; i< traits?.length; i++) {
			let t = traits[i]

			results.push(
				<li key={i}>
					<PersonalityTraitCell trait={t} />
				</li>
			)
		}

		return results
	}

	//TODO: list style
	return (
		<ul className="list-none">
			{ renderCells(traits) }
		</ul>
	)
}

type PersonalitySummaryTableProps = {
	// Trait => value
	traits: Trait[]
}

const PersonalitySummaryTable = ({ traits }: PersonalitySummaryTableProps) => {
	// TODO: header background white
	// TODO items
	return (
		<div>
			<div>
				<h3 className="text-lg bg-white text-black px-2 py-2">Personality Summary</h3>
			</div>
			<PersonalityTraitList traits={traits}/>
		</div>
	)
}

type AdjectivesListProps = {
	adjectives: string[]
}

const AdjectivesList = ({ adjectives }: AdjectivesListProps) => {
	return (
		<div>
		<h3 className="text-lg">Adjectives</h3>
			<p>{adjectives && adjectives.length > 0 ? adjectives.join(", ") : "No adjectives given"}</p>
		</div>
	)
}

type ProfileContentProps = {
	// TODO 
	profile: UserProfileResponse
	personality: UserPersonalityResponse
}

const ProfileContent = ({ personality, profile}: ProfileContentProps) => {
	console.log("profile", profile)

	const adjs: string[] = profile?.adjectives
	const elements: Element[] = profile?.mostEndorsedElements
	const descriptors: Trait[] = personality.summaryTableRows.map((row)=> {
		let values: TraitValue[] = row.values.map((v) => {
			return {text: v.text, highlighted: v.isHighlighted}
		})

		return {traitName: row.title, traitValues: values}
	})


	// TODO: css module 
	return (
		<div className="col-span-3 py-3 space-y-4">
			<ProfileHeader userName={profile?.userName} profileUrl={profile?.profileUrl}/>
			<PersonalitySummaryTable traits={descriptors}/>
			<EndorsedElementsGrid elements={elements}/>
			<AdjectivesList adjectives={adjs}/>
		</div>
	)
}

type ProfileHeaderProps = {
	userName: string 
	profileUrl: string 
}

const ProfileHeader = ({ userName, profileUrl }: ProfileHeaderProps) => {
	return (
		<div className="space-y-1">
			<h1 className="text-5xl">{userName}</h1>
			<h2 className="text-lg">{profileUrl}</h2>
		</div>
	)
}

interface UserProfileResponse {
	description: string
	userName: string
	profileUrl: string
	adjectives: string[]
	id: string
	mostEndorsedElements: Element[] 
}

interface SummaryTableValue {
		text: string 
		isHighlighted: boolean
}

interface SummaryTableRow {
		title: string 
		values: SummaryTableValue[]
}

interface UserPersonalityResponse {
	summaryTableRows: SummaryTableRow[]
}


const Profile = () => {
	const [profile, setProfile] = useState<UserProfileResponse>()
	const [personality, setPersonality] = useState<UserPersonalityResponse>()

	useEffect(() => {
		setProfile(ProfileFixture[0])
		setPersonality(PersonalityFixture)
		}, [])

	return (
		<Provider url={BaseURL}>
			<Suspense fallback='Loading...'>
				{ profile && personality && (
					<div className="grid grid-cols-4">
						<ProfileSummary description={profile.description}/>
						<ProfileContent personality={personality} profile={profile}/>
					</div>
				)}
			</Suspense>
		</Provider>
	)
}

type ProfileImageProps = {
	src: string
}

const ProfileImage = ({ src }: ProfileImageProps) => {
	//TODO
	return (
		<div className="w-48 h-48">
			<Image src={src} width="100" height="100" className="rounded-full shadow-sm" alt=""/>
		</div>
	)
}

type ProfileSummaryProps = {
	description: string
}

const ProfileSummary = ({ description }: ProfileSummaryProps) => {
	// None given in the API
	const profileImage = "/profileimage.png"

	return (
		<div className="col-span-1">
			<ProfileImage src={profileImage}/>
			<p>{description ?  description : "No description provided" }</p>
		</div>
	)
}
