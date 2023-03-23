import { useState } from "react"
import { Card, Button } from "semantic-ui-react"

// function PokemonCard({ poke: {id, name, hp, sprites: {front, back}} }) {
function PokemonCard({ poke, setPokemon }) {
	const { id, name, hp, sprites } = poke
	const { front, back } = sprites

	const [showFront, setShowFront] = useState(true)

	const handleDelete = (e) => {
		console.log(id)
		if (window.confirm(`Are you sure you want to kill ${name}?`) === true) {
			fetch("http://localhost:3001/pokemon/" + id, {
				method: "DELETE",
			}).then(() => {
				setPokemon((prevPokemon) =>
					prevPokemon.filter((poke) => poke.id !== id)
				)
			})
		}
	}

	const handleAttack = (e) => {
		// Onclick, with reduce the hp by 1 and persist
		fetch("http://localhost:3001/pokemon/" + id, {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				// ...poke,
				hp: hp - 1,
			}),
		})
			.then((res) => res.json())
			.then((updatedPoke) => {
				console.log(updatedPoke)
				setPokemon((prevPokemon) =>
					prevPokemon.map((poke) => (poke.id === id ? updatedPoke : poke))
				)
			})
	}

	return (
		<Card>
			<div>
				<div className="image" onClick={() => setShowFront(!showFront)}>
					<img alt={name} src={showFront ? front : back} />
				</div>
				<div className="content">
					<div className="header">{name}</div>
				</div>
				<div className="extra content">
					<span>
						<i className="icon heartbeat red" />
						{hp}
						<Button circular icon="cut" size="mini" onClick={handleAttack} />
						<Button circular icon="delete" size="mini" onClick={handleDelete} />
						{/* <button>x</button> */}
					</span>
				</div>
			</div>
		</Card>
	)
}

export default PokemonCard
