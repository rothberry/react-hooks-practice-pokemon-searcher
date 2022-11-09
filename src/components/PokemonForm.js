import { useState } from "react"
import { Form } from "semantic-ui-react"

function PokemonForm({ addPokemon }) {
	// const [name, setName] = useState("")
	// const [hp, setHp] = useState(0)
	// const [front, setFront] = useState("")
	// const [back, setBack] = useState("")

	const [formData, setFormData] = useState({
		name: "",
		hp: 0,
		front: "",
		back: "",
	})

	const handleSubmit = (e) => {
		e.preventDefault()
		addPokemon(formData)
	}

	const handleNameChange = (e) => {
		setFormData((prevState) => {
			return {
				name: e.target.value,
				...prevState,
			}
		})
		// setFormData({
		// 	name: e.target.value,
		// 	...formData,
		// })
	}

	const handleChange = (e) => {
		setFormData((prevState) => {
			return {
				...prevState,
				[e.target.name]: e.target.value,
			}
		})

		// setFormData({
		// 	...formData,
		// 	[e.target.name]: e.target.value,
		// })
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
						value={formData.name}
						onChange={handleChange}
						// onChange={(e) => setName(e.target.value)}
					/>
					<Form.Input
						fluid
						label="hp"
						placeholder="hp"
						name="hp"
						type="number"
						value={formData.hp}
						onChange={handleChange}
					/>
					<Form.Input
						fluid
						label="Front Image URL"
						placeholder="url"
						name="front"
						value={formData.front}
						onChange={handleChange}
					/>
					<Form.Input
						fluid
						label="Back Image URL"
						placeholder="url"
						name="back"
						value={formData.back}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Button>Submit</Form.Button>
			</Form>
		</div>
	)
}

export default PokemonForm
