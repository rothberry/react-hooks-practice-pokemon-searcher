import React from "react"
import PokemonCard from "./PokemonCard"
import { Card } from "semantic-ui-react"

function PokemonCollection({ pokemon }) {
	const mappingPokemon = () => {
		// goal is to map over the array of pokemon and create indivual cards
		return pokemon.map((poke) => {
			return <PokemonCard poke={poke} key={poke.name} />
		})
	}

	return (
		<Card.Group itemsPerRow={6}>
			<h1>Hello From Pokemon Collection</h1>
			{mappingPokemon()}
		</Card.Group>
	)
}

export default PokemonCollection
