import React, { useState } from 'react';

const Add = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label className="lable"><b>Name</b></label><br></br>
			<input className="inptfield" type="text" name="name" value={user.name} onChange={handleInputChange} /><br></br>
			<label className="lable"><b>Username</b></label><br></br>
			<input className="inptfield" type="text" name="username" value={user.username} onChange={handleInputChange} /><br></br>
			<button className="btn_add">Add new user</button>
		</form>
	)
}

export default Add;