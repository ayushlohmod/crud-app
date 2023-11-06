import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function EditUser() {

  const { id } = useParams()
  const [name, setName] = useState();
	const [lastName, setLastName] = useState();
	const [email, setEmail] = useState();
	const [mobile, setMobile] = useState();
	const [project, setProject] = useState();
	const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/getUser/"+id)
    .then(result => {console.log(result)
      setName(result.data.Name)
      setLastName(result.data.LastName)
      setEmail(result.data.email)
      setMobile(result.data.Mobile)
      setProject(result.data.Project)
    })
    .catch(err => console.log(err))
    
    
  }, [])

  const Update = (e) => {
  e.preventDefault();
  axios.put("http://localhost:3001/updateUser/"+id, {name, lastName, email, mobile, project})
		.then(result => {
			console.log(result)
			navigate('/')
		})
		.catch(err => console.log(err))
  }


  return (
    <div className="container" style={{ maxWidth: "400px" }}>
    <h1>Update Clients</h1>
    <hr />
    <form onSubmit={Update}>
      <div className="form-group">
        <label>Name</label>
        <input
          name="Name"
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>last Name</label>
        <input
          name="LastName"
          type="text"
          className="form-control"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          name="email"
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Mobile No</label>
        <input
          name="Mobile No"
          type="text"
          className="form-control"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Project</label>
        <textarea
          name="Project"
          type="text"
          className="form-control"
          value={project}
          onChange={(e) => setProject(e.target.value)}
        />
      </div>

      <div className="btn-group">
        <button className='btn btn-success'>Update</button>
      </div>
    </form>
  </div>
  )
}

export default EditUser