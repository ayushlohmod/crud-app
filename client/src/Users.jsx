
import { useState } from 'react';
import CreateUser from './CreateUser';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
function Users() {

    const [users, setUsers] = useState([]);
        // Name : "Carl", Lastname : "smith", Email : "s33@gmail.com ", Mobile : "440888888", Project : "Front-end landpage development"
    
	
		useEffect(() => {
			axios.get("http://localhost:3001")
			.then(result => setUsers(result.data))
			.catch(err => console.log(err))
			
			
		}, [])

		const handelDelete = (id) => {
			axios.delete("http://localhost:3001/deleteUser/"+id)
			.then(res => {console.log(res)
			window.location.reload()	
		})
			.catch(err => console.log(err))
			}

  return (


   
<div className="container">
		
			<div className='row'>
            <div className="col">
			<h2>
					Clients 
				</h2>
			<table className="table riped  table-hover table-bordered container float-left ">
				
				<thead>
					<tr>
						<th>Name</th>
						<th>Lastname</th>
                        <th>Email</th>
						<th>Mobile No.</th>
						<th>Project</th>
						
					</tr>
				</thead>
				
                <tbody>
					
					{
                    users.map((user) => {
					return	<tr>
							<td>{user.name}</td>
							<td>{user.lastName}</td>
							<td>{user.email}</td>
							<td>{user.mobile}</td>
							<td>{user.project}</td> 
							<td>
							<Link to= {`/edit/${user._id}`} className="btn btn-success">Edit</Link>
							<button className="btn btn-danger" 
							onClick={(e) => handelDelete(user._id)}
							> delete </button>
							</td>
						</tr>
						
						
					})
				}
				
                </tbody>
				
				
			</table>
			</div>
			<div className='col'>
			{<CreateUser/>}

			</div>
			
		</div>
		 </div>
	
  )
}

export default Users;