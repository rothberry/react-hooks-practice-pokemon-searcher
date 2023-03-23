import { useState } from "react"
import { Form } from "semantic-ui-react"

function PokemonForm({ BASE_URL, setPokemon }) {
	const [name, setName] = useState("")
	const [hp, setHp] = useState("0")
	const [frontUrl, setFrontUrl] = useState("")
	const [backUrl, setBackUrl] = useState("")

	const [formState, setState] = useState({
		name: "",
		hp: 0,
		// sprites: {
		front: "",
		back: "",
		// },
	})

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log("submitting...")
		fetch(BASE_URL, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				name,
				hp: Number(hp),
				sprites: {
					front: frontUrl,
					back: backUrl,
				},
			}),
		})
			.then((res) => res.json())
			.then((newPokemon) => {
				setPokemon((prevPokemon) => [newPokemon, ...prevPokemon])
			})
	}

	const handleNameChange = (e) => {
		setName(e.target.value)
	}

	const handleChange = (e) => {
		// if (e.target.name === "front") {
		// 	setState({ ...formState, sprites: { back: back, front: e.target.value } })
		// }
		setState({ ...formState, [e.target.name]: e.target.value })
	}

	return (
		<div>
			<h3>Add a Pokemon!</h3>
			<Form onSubmit={handleSubmit}>
				<Form.Group widths="equal">
					<Form.Input
						fluid
						label="Name"
						placeholder="Name"
						name="name"
						value={name}
						onChange={handleNameChange}
					/>
					<Form.Input
						fluid
						label="hp"
						placeholder="hp"
						name="hp"
						type="number"
						value={hp}
						// onChange={(e) => setHp(Number(e.target.value))}
						onChange={(e) => setHp(e.target.value)}
					/>
					<Form.Input
						fluid
						label="Front Image URL"
						placeholder="url"
						name="frontUrl"
						value={frontUrl}
						onChange={(e) => setFrontUrl(e.target.value)}
					/>
					<Form.Input
						fluid
						label="Back Image URL"
						placeholder="url"
						name="backUrl"
						value={backUrl}
						onChange={(e) => setBackUrl(e.target.value)}
					/>
				</Form.Group>
				<Form.Button>Submit</Form.Button>
			</Form>
		</div>
	)
}

export default PokemonForm
