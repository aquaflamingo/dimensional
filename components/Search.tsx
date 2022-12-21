const SearchBar = () => {
	const searchRef = useRef(null)
	const [query, setQuery] = useState('')
	const [active, setActive] = useState(false)
	const [results, setResults] = useState([])

	//TODO
	const searchEndpoint = (query) => `/api/search?q=${query}`

	const onChange = useCallback((event) => {
		const query = event.target.value;
		setQuery(query)

		// TODO: hooks
		if (query.length) {
			fetch(searchEndpoint(query))
				.then(res => res.json())
				.then(res => {
					setResults(res.results)
				})
		} else {
			setResults([])
		}
	}, [])

	const onFocus = useCallback(() => {
		setActive(true)
		window.addEventListener('click', onClick)
	}, [])

	const onClick = useCallback((event) => {
		if (searchRef.current && !searchRef.current.contains(event.target)) {
			setActive(false)
			window.removeEventListener('click', onClick)
		}
	}, [])

	const renderResults = (results) => {
		return (
				<ul>
					{results.map(({ id, title }) => (
						<li key={id}>
							{title}
						</li>
					))}
				</ul>
		)
	}

	return (
		<div ref={searchRef}>
			<input
				onChange={onChange}
				onFocus={onFocus}
				placeholder='Search'
				type='text'
				value={query}
				/>
			{ active && results.length > 0 && (
				renderResults(results)
			) }
		</div>
	)
}
