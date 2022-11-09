import React from "react"
import PokemonCard from "./PokemonCard"
import { Card } from "semantic-ui-react"

function PokemonCollection({ pokemon, removePokemon }) {
	// First make ONE card, then map over all the array
	const mappedPokemon = () => {
		return pokemon.map((mon) => {
			return (
				<PokemonCard mon={mon} key={mon.id} removePokemon={removePokemon} />
			)
		})
	}

	// Can use variable assigment, instead of a function call
	const mapMonVariable = pokemon.map((mon) => (
		<PokemonCard mon={mon} key={mon.id} />
	))

	return (
		<Card.Group itemsPerRow={6}>
			{mappedPokemon()}
			{/* {mapMonVariable} */}
		</Card.Group>
	)
}

export default PokemonCollection
