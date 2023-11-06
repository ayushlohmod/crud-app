
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function CreateUser() {
	
	const [name, setName] = useState();
	const [lastName, setLastName] = useState();
	const [email, setEmail] = useState();
	const [mobile, setMobile] = useState();
	const [project, setProject] = useState();
	const navigate = useNavigate();


	const Submit = (e) => {
		e.preventDefault();
		axios.post("http://localhost:3001/createUser", {name, lastName, email, mobile, project})
		.then(result => {
			console.log(result)
			window.location.reload()
			navigate('/')
		})
		.catch(err => console.log(err))
	}

	return (
    <div className="container" style={{ maxWidth: "400px" }}>
			<h1>Create Clients</h1>
			<hr />
			<form onSubmit={Submit}>
				<div className="form-group">
					<label>Name</label>
					<input
						name="Name"
						type="text"
						className="form-control"
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>last Name</label>
					<input
						name="LastName"
						type="text"
						className="form-control"
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Email</label>
					<input
						name="email"
						type="email"
						className="form-control"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Mobile No</label>
					<input
						name="Mobile No"
						type="text"
						className="form-control"
						onChange={(e) => setMobile(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Project</label>
					<textarea
						name="Project"
						type="text"
						className="form-control"
						onChange={(e) => setProject(e.target.value)}
					/>
				</div>

				<div className="btn-group">
					<input type="submit" value="Create Client" className="btn btn-primary"
					
					/>
				</div>
			</form>
		</div>
  )
}

export default CreateUser