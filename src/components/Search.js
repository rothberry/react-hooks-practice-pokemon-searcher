import { useState } from "react"

function Search({ setInput }) {
	// const [searchInput, setInput] = useState("")

	const handleSearch = (e) => {
		setInput(e.target.value)
	}

	return (
		<div className="ui search">
			<div className="ui icon input">
				<input
					className="prompt"
					onChange={handleSearch} /*  value={searchInput}  */
				/>
				<i className="search icon" />
			</div>
		</div>
	)
}

export default Search
