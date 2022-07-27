// import React from "react"

function Search({ setSearch }) {
	const handleChange = (event) => {
		// we need to capture the input and set the search to that
		// debugger
		setSearch(event.target.value)
	}

	return (
		<div className="ui search">
			<div className="ui icon input">
				<input className="prompt" onChange={handleChange} />
				{/* <input
					className="prompt"
					onChange={(event) => setSearch(event.target.value)}
				/> */}
				<i className="search icon" />
			</div>
		</div>
	)
}

export default Search
