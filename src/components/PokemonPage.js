import React, { useState, useEffect } from "react"
import PokemonCollection from "./PokemonCollection"
import PokemonForm from "./PokemonForm"
import Search from "./Search"
import { Container } from "semantic-ui-react"
const BASE_URL = "http://localhost:3001/pokemon/"

function PokemonPage() {
	const [pokemon, setPokemon] = React.useState([])
	const [searchInput, setInput] = useState("")

	useEffect(() => {
		fetch(BASE_URL)
			.then((res) => res.json())
			.then(setPokemon)
	}, [])

	const filterPokemon = () => {
		if (searchInput === "") {
			return pokemon
		} else {
			return pokemon.filter((poke) => {
				return poke.name.toLowerCase().includes(searchInput.toLowerCase())
			})
		}
	}

	// const mapPokemonAsAFilter = () => {
	// 	const mapPoke =  pokemon.map((poke) => {
	// 		if (poke.name.toLowerCase().includes(searchInput.toLowerCase())) {
	// 			return poke
	// 		}
	// 	})
	//   console.log(mapPoke)
	//   return mapPoke
	// }

	const addPokemon = (newPokemon) => {
		setPokemon([...pokemon, newPokemon])
	}

	const deletePokemon = (id) => {
		setPokemon(pokemon.filter((poke) => poke.id !== id))
	}

	return (
		<Container>
			<h1>Pokemon Searcher</h1>
			<br />
			<PokemonForm BASE_URL={BASE_URL} setPokemon={setPokemon} />
			<br />
			<Search setInput={setInput} />
			<br />
			<PokemonCollection pokemon={filterPokemon()} setPokemon={setPokemon} />
		</Container>
	)
}

export default PokemonPage
