import { useState, useEffect } from "react"
import PokemonCard from "./PokemonCard"
import { Card } from "semantic-ui-react"

function PokemonCollection({ pokemon, setPokemon }) {
	// const [pokemon, setPokemon] = useState([])

	// Only on component Mounting
	// useEffect(() => {
	// 	fetch(BASE_URL)
	// 		.then((res) => res.json())
	// 		.then((pokemonArray) => {
	// 			console.log(pokemonArray)
	// 			setPokemon(pokemonArray)
	// 		})
	// }, [])

	const mapPokemonCards = pokemon.map((poke) => (
		<PokemonCard poke={poke} key={poke.id} />
	))

	const mapPokemonCardsFunc = () => {
		return pokemon.map((poke) => (
			<PokemonCard poke={poke} setPokemon={setPokemon} key={poke.id} />
		))
		// return pokemon.map(({id, name, hp, sprites}) => <PokemonCard id={poke.id} ...etc key={poke.id} />)
	}

	return (
		<Card.Group itemsPerRow={6}>
			{mapPokemonCardsFunc()}
			{/* {mapPokemonCards} */}
		</Card.Group>
	)
}

export default PokemonCollection
