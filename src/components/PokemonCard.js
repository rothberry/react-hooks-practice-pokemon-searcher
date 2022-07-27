import { /* useEffect, */ useState } from "react"
import { Card } from "semantic-ui-react"

function PokemonCard({
	poke: {
		name,
		id,
		hp,
		sprites: { front, back },
	},
}) {
	// const { name, sprites, id, hp } = poke
	// const { front, back } = sprites

	const [showFront, setShowFront] = useState(true)

	// useEffect(() => {
	// 	console.log(showFront)
	// }, [showFront])

	// ? When we click on card, flip sprite from front to back????

	const toggleSprite = (event) => {
		// console.log(showFront)
		setShowFront(!showFront)
		// console.log(showFront)
		// setShowFront(prevState => !prevState)
	}

	return (
		<Card onClick={toggleSprite}>
			<div>
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
