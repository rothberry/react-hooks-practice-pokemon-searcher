import { useState } from "react"
import { Card } from "semantic-ui-react"

function PokemonCard({
	mon: {
		id,
		name,
		hp,
		sprites: { front, back },
	},
	removePokemon,
}) {
	const [showFront, setShowFront] = useState(true)

	const toggleSprite = () => {
		// setShowFront(!showFront)
		setShowFront((prevState) => !prevState)
	}

	const handleDelete = (e) => {
		removePokemon(id)
	}

	return (
		<Card onClick={toggleSprite}>
			<div>
				<button onClick={handleDelete}>X</button>
				<div className="image">
					<img alt={name} src={showFront ? front : back} />
				</div>
				<div className="content">
					<div className="header">{name}</div>
				</div>
				<div className="extra content">
					<span>
						<i className="icon heartbeat red" />
						{hp}
					</span>
				</div>
			</div>
		</Card>
	)
}

export default PokemonCard
