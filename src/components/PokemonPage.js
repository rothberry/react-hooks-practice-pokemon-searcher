import { useEffect, useState } from "react"
import PokemonCollection from "./PokemonCollection"
import PokemonForm from "./PokemonForm"
import Search from "./Search"
import { Container } from "semantic-ui-react"

// console.log({ outside: "first" })

function PokemonPage() {
	const POKE_URL = "http://localhost:3001/pokemon/"

	const [pokemon, setPokemon] = useState([])
	const [search, setSearch] = useState("")
	// console.log({ inside: search })

	// With an empty dependancy array, the effect will only run on component mounting
	// the same as theold componentDidMount()
	useEffect(() => {
		// console.log({ componentMount: "third" })
		fetchAllPokemon()
	}, [])

	// useEffect(() => {
	//   console.log({ useEffectSearch: search })
	// }, [search])

	// useEffect(() => {
	// 	console.log({ useEffectNoDep: search })
	// })

	const fetchAllPokemon = () => {
		fetch(POKE_URL)
			.then((res) => res.json())
			.then((allPokemon) => {
				// console.log(allPokemon)
				setPokemon(allPokemon)
			})
	}

	const fetchPostPokemon = (postReqObj) => {
		fetch(POKE_URL, postReqObj)
			.then((res) => res.json())
			.then((newPokemon) => {
				console.log(newPokemon)
				// update our all pokemon to include the new pokemon
				setPokemon([...pokemon, newPokemon])
				// setPokemon(pokemon.push(newPokemon)) // ????
			})
	}

	const searchThroughPokemon = () => {
		// either a:
		// serach is empty, then show all pokemon
		// or:
		// filter through pokemon for names that include the search term
		// if (search.length == 0) {
		//   return pokemon
		// } else {
		return pokemon.filter((p) => {
			// check if p.name includes search
			return p.name.toLowerCase().includes(search.toLowerCase())
		})
		// }
	}

	const filterPokemon = () => {
		return pokemon.filter((p) => p.name.includes(search.toLowerCase()))
	}

	return (
		<Container>
			<h1>Pokemon Searcher</h1>
			<br />
			<PokemonForm fetchPostPokemon={fetchPostPokemon} />
			<br />
			<Search setSearch={setSearch} />
			<br />
			<PokemonCollection pokemon={!!search ? filterPokemon() : pokemon} />
			{/* <PokemonCollection pokemon={searchThroughPokemon()} /> */}
		</Container>
	)
}

// console.log({ under: "sixth" })

export default PokemonPage
