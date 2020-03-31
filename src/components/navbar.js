import React, { Component } from 'react';
import Logo from '../logo1.png'
import { NavLink } from 'react-router-dom';

class Navbar extends Component {

	render() {
		return (
			<nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
				<div className="container">
					<a className="navbar-brand" href="#"><img src={Logo} height="60px"/></a>
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink to="/" className="nav-link" href="#">Home</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/" className="nav-link" href="#">What is Covid-19</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/" className="nav-link" href="#">Prevention</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;