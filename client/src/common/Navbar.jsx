import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<NavLink className="navbar-brand " activeClassName="active" to="/" >
					
								Clients Panel
							</NavLink>
						

						
				
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink
								className="nav-link"
								activeClassName="active"
								to="/create"
							>
								Clients
							</NavLink>
						</li>
					</ul>
				</div>
		
		</nav>
	);
};

export default Navbar;
