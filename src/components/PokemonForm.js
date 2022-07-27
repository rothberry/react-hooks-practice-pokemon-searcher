import { useEffect, useState } from "react"
import { Form } from "semantic-ui-react"

function PokemonForm({ fetchPostPokemon }) {
	// const [name, setName] = useState("")
	// const [hp, setHp] = useState(0)
	// const [front, setFront] = useState("")
	// const [back, setBack] = useState("")

	const [formData, setFormData] = useState({
		name: "",
		hp: 0,
		// sprites: {
		front: "",
		back: "",
		// },
	})

	// const changeName = (event) => {
	// 	setFormData({
	// 		...formData,
	// 		name: event.target.value,
	// 	})
	// }

	// const changeHp = (event) => {
	// 	setFormData({
	// 		...formData,
	// 		hp: event.target.value,
	// 	})
	// }

	const changeInput = (event) => {
		const key = event.target.name
		const value = event.target.value

		// if (key == "front" || key == "back") {
		// 	setFormData({
		// 		...formData,
		// 		sprites: {
		// 			[key]: value,
		// 		},
		// 	})
		// } else {
		setFormData({
			...formData,
			[key]: value,
		})
		// }
		// debugger
	}

	// useEffect(() => {
	// 	console.log({ name, hp, front, back })
	// }, [name, hp, front, back])

	useEffect(() => {
		console.log(formData)
	}, [formData])

	const addPokemon = () => {
		// Need to send our state to the db.json
		const postReqObj = {
			method: "POST",
			headers: {
				"Content-type": "application/json",
				Accepts: "application/json",
			},
			body: JSON.stringify(formData),
			// body: JSON.stringify({
			// 	name: formData.name,
			// 	hp: formData.hp,
			// 	sprites: {
			// 		front: formData.frontUrl,
			// 		back: formData.backUrl,
			// 	},
			// }),

			// body: JSON.stringify({
			// 	name,
			// 	hp,
			// 	sprites: {
			// 		front,
			// 		back,
			// 	},
			// }),
		}
		fetchPostPokemon(postReqObj)
	}

	return (
		<div>
			<h3>Add a Pokemon!</h3>
			<Form onSubmit={addPokemon}>
				<Form.Group widths="equal">
					<Form.Input
						fluid
						label="Name"
						placeholder="Name"
						name="name"
						onChange={changeInput}
						// onChange={(event) => setName(event.target.value)}
					/>
					<Form.Input
						fluid
						label="hp"
						placeholder="hp"
						name="hp"
						type="number"
						onChange={changeInput}
						// onChange={(event) => setHp(event.target.value)}
					/>
					<Form.Input
						fluid
						label="Front Image URL"
						placeholder="url"
						name="front"
						onChange={changeInput}
						// onChange={(event) => setFront(event.target.value)}
					/>
					<Form.Input
						fluid
						label="Back Image URL"
						placeholder="url"
						name="back"
						onChange={changeInput}
						// onChange={(event) => setBack(event.target.value)}
					/>
				</Form.Group>
				<Form.Button>Submit</Form.Button>
			</Form>
		</div>
	)
}

export default PokemonForm
