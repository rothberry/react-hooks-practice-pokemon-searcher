import { useEffect, useState } from "react"
import PokemonCollection from "./PokemonCollection"
import PokemonForm from "./PokemonForm"
import Search from "./Search"
import { Container } from "semantic-ui-react"

function PokemonPage() {
	const [pokemon, setPokemon] = useState([])
	const [search, setSearch] = useState("")
	const BASE_URL = "http://localhost:3001/pokemon/"

	// Only want to run ONCE when the component mounts
	useEffect(() => {
		fetchAllPokemon()
	}, [])

	const fetchAllPokemon = () => {
		fetch(BASE_URL)
			.then((res) => res.json())
			.then((pokemonData) => {
				// console.log(pokemonData)
				setPokemon(pokemonData)
			})
	}

	const addPokemon = (formData) => {
		const betterFormData = {
			name: formData.name,
			hp: formData.hp,
			sprites: {
				front: formData.front,
				back: formData.back,
			},
		}

		const postReqObj = {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(betterFormData),
		}

		fetch(BASE_URL, postReqObj)
			.then((res) => res.json())
			.then((newPokemonObj) => {
				console.log({ newPokemonObj })
				// setPokemon([newPokemonObj, ...pokemon])
				setPokemon([...pokemon, newPokemonObj])
			})
	}

	const filterPokemon = () => {
		return pokemon.filter((mon) => mon.name.includes(search))
	}

	const removePokemon = (id) => {
		console.log(`deleting id: ${id}`)
		const delReqObj = {
			method: "DELETE",
			headers: {
				"content-type": "application/json",
			},
		}
		fetch(BASE_URL + id, delReqObj)
			// .then((res) => res.json())
			.then(() => {
				setPokemon(pokemon.filter((mon) => mon.id !== id))
			})
			.catch((err) => console.log({ err }))
	}

	const updatePokemon = (formData) => {
		const reqPatchObj = {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(formData),
		}

		fetch(BASE_URL + id, reqPatchObj)
			.then((res) => res.json())
			.then((updatedPokemonObj) => {
				// find the pokemon in OUR state array and update ONLY that
				setPokemon(
					pokemon.map((mon) => (mon.id === id ? updatedPokemonObj : mon))
				)
			})
	}

	return (
		<Container>
			<h1>Pokemon Searcher</h1>
			<br />
			<PokemonForm addPokemon={addPokemon} />
			<br />
			<Search search={search} setSearch={setSearch} />
			<br />
			<PokemonCollection
				pokemon={filterPokemon()}
				removePokemon={removePokemon}
			/>
		</Container>
	)
}

export default PokemonPage
