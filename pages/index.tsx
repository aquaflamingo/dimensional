import { useState } from "react"
import Head from 'next/head'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { BrandURL } from "../utils/constants"
import { Base, GetProfileSummary, ListProfiles } from "../utils/urls"
import useFetch from 'use-http'

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
		<div>
			<img src={BrandURL} width="100" height="54"/>
			<p>Search Bar here</p>
		</div>
	)
}

type ElementSVGProps = {
	fill: string
}

const ElementSVG = ({ fill }: ElementSVGProps) => {
	return (
		<svg width="75" height="75">
			<circle cx="35" cy="35" r="15" stroke={fill} strokeWidth="15" fill="none" />
		</svg>	
	)
}

type ElementCellProps = {
	fill: string 
	element: string
}

const ElementCell = ({ element, fill }: ElementCellProps) => {
	// TODO: border
	// TODO style
	return (
		<div>
			<ElementSVG fill={fill}/>
			<p>{element}</p>
		</div>
	)
}

// Traits and elements are the same?
type Element = {
	name: string
	hexCodes: string[]
}

type EndorsedElementsGridProps = {
	elements: Element[]
}

const EndorsedElementsGrid = ({ elements }: EndorsedElementsGridProps) => {

	// TODO: grid styling
	return (
		<div>
			<ElementCell element="First" fill="#fff"/>
			<ElementCell element="Second" fill="#1f1"/>
		</div>
	)
}

const PersonalityTraitCell = () => {
	return (
		<div>
			<div>
				<p>Left aligned</p>
			</div>
			<div>
				<p>Right aligned</p>
			</div>
		</div>
	)
}

const PersonalityTraitList = () => {
	// TODO model each item
	// TODO: default state without traits
	const renderCells = (items : any[]) => {
		let results = []

		results.push(
		<li>
				<PersonalityTraitCell />
			</li>
		)

		return results
	}

	return (
		<ul>
			{ renderCells([]) }
		</ul>
	)
}

const PersonalitySummaryTable = () => {

	// TODO: header background white
	// TODO items
	return (
		<div>
			<div>
				<h3>Personality Summary</h3>
			</div>
			<PersonalityTraitList />
		</div>
	)
}

type AdjectivesListProps = {
	list: string[]
}

const AdjectivesList = ({ list }: AdjectivesListProps) => {
	let content = "Strong, proud, TODO"

	return (
		<div>
		<h3>Adjectives</h3>
			<p>{content}</p>
		</div>
	)
}

const ProfileContent = () => {
	// TODO: hooks
	// TODO: css module 
	return (
		<div>
			<ProfileHeader />
			<hr/>
			<PersonalitySummaryTable />
			<hr/>
			<EndorsedElementsGrid />
			<hr/>
			<AdjectivesList />
		</div>
	)
}

const ProfileHeader = () => {
	return (
		<div>
		<h1>Name</h1>
		<h2>URL</h2>
		</div>
	)
}

const Profile = (id: string) => {
	id = ""

	const [profile, setProfile] = useState()


	const { get, response, loading, error } = useFetch(Base, {mode: 'no-cors'})

	useEffect(() => { initializeProfile() }, []) // componentDidMount
  
  async function initializeProfile() {
		const r = await get(ListProfiles)
		console.log("results", r)
    const prof = await get(GetProfileSummary(id))
    if (response.ok) setProfile(prof)
		// Handle error
  }

	return (
		<div className="grid grid-cols-4">
			<ProfileSummary className="col-span-3"/>

			<div className="col-span-3">
				<ProfileContent/>
			</div>
		</div>
	)
}

type ProfileImageProps = {
	src: string
}

const ProfileImage = ({ src }: ProfileImageProps) => {
	src = "https://randomuser.me/api/portraits/women/81.jpg"

	return (
		<div className="relative w-48 h-48">
			<img className="rounded-full shadow-sm" src={src} />
		</div>
	)
}

const ProfileSummary = () => {
	return (
		<div>
			<ProfileImage src={""}/>
			<p>Description of profile</p>
		</div>
	)
}
